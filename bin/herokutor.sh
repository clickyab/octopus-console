#!/bin/bash
#set -x
set -eo pipefail

# This job is from jenkins. so kill it if it is a pull request
exit_message() {
    echo ${1:-'exiting...'}
    code=${2:-1}
    exit ${code}
}

APP=${APP:-}
BRANCH=${BRANCH_NAME:-master}
BRANCH=${CHANGE_TARGET:-${BRANCH}}
CACHE_ROOT=${CACHE_ROOT:-/var/lib/jenkins/cache}

PUSH="--push"
[ -z ${CHANGE_AUTHOR} ] || PUSH=""
[ -z ${APP} ] && exit_message "The APP is not defined." # WTF, the APP NAME is important

SCRIPT_DIR=$(readlink -f $(dirname ${BASH_SOURCE[0]}))

SOURCE_DIR=${1:-}
[ -z ${SOURCE_DIR} ] && exit_message "Must pass the source directory as the first parameter" 1
SOURCE_DIR=$(cd "${SOURCE_DIR}/" && pwd)

BUILD_DIR=${2:-$(mktemp -d)}
# Make sure the cache is writable on the worker server
CACHE_DIR=${CACHE_ROOT}/${APP}-${BRANCH}

mkdir -p "${BUILD_DIR}" "${CACHE_DIR}"
BUILD=$(cd "${BUILD_DIR}/" && pwd)
CACHE=$(cd "${CACHE_DIR}/" && pwd)

pushd ${SOURCE_DIR}
GIT_WORK_TREE=${BUILD} git checkout -f HEAD
export COMMITCOUNT=$(git rev-list HEAD --count| cat)
popd

TEMPORARY=$(mktemp -d)

# Create Rockerfile to build with rocker (the Dockerfile enhancer tool)
cat > ${TEMPORARY}/Rockerfile <<EOF
FROM node
MOUNT {{ .Build }}:/app
MOUNT {{ .Cache }}:/app/node_modules

RUN cd /app && npm i && yarn run build
EXPORT /app/build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx
IMPORT build /usr/share/nginx
RUN mv /usr/share/nginx/build /usr/share/nginx/html

TAG registry.clickyab.ae/clickyab/{{ .App }}:{{ .Version }}
PUSH registry.clickyab.ae/clickyab/{{ .App }}:{{ .Version }}
EOF

pushd ${TEMPORARY}
# Actual build
rocker build ${PUSH} -var Build=${BUILD} -var Cache=${CACHE} -var Version=${BRANCH}.${COMMITCOUNT} -var App=${APP}
popd

echo "${TEMPORARY}" >> /tmp/kill-me
echo "${BUILD_DIR}" >> /tmp/kill-me


[ -z ${CHANGE_AUTHOR} ] || exit_message "It's a PR, bail out" 0
if [[ ( "${BRANCH}" != "master" ) && ( "${BRANCH}" != "deploy" ) ]]; then
    exit_message "Its not on correct branch, bail out" 0
fi

kubectl -n octopus set image deployment octopus-console ${APP}-${BRANCH}=registry.clickyab.ae/clickyab/${APP}:${BRANCH}.${COMMITCOUNT} --record
