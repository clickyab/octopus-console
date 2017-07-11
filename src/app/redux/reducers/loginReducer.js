import {LOGIN_SUCCESSFUL, LOGIN_FAILED, UNAUTHORIZED_USER} from "../actions/index";

export function loginReducer(state = false, action) {
    switch (action.type) {
        case LOGIN_SUCCESSFUL:
            return true;
        case LOGIN_FAILED:
        case UNAUTHORIZED_USER:
            return false;
        default :
            return state;
    }
}