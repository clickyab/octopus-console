import {USER_RESPONSE_SUCCESS, UNAUTHORIZED_USER, LOGOUT_SUCCESSFUL} from "../actions/index";

export function userDataReducer(state = {}, action) {
    switch (action.type) {
        case USER_RESPONSE_SUCCESS:
            return action.data;
        case UNAUTHORIZED_USER:
            return state = {};
        case LOGOUT_SUCCESSFUL:
            return action.data;
        default :
            return state;
    }
}