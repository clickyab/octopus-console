node {
    stage('Deploy into k8s') {
        checkout scm
        sh "APP=octopus-console bash ./bin/herokutor.sh `pwd`"
    }
}
