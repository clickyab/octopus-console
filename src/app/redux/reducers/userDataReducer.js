import {USER_RESPONSE_SUCCESS, UNAUTHORIZED_USER} from "../actions/index";

export function userDataReducer(state = {}, action) {
    switch (action.type) {
        case USER_RESPONSE_SUCCESS:
            return action.data;
        case UNAUTHORIZED_USER:
            return state = {};
        default :
            return state;
    }
}