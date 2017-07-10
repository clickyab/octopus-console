import {USER_RESPONSE_SUCCESS} from "../actions/index";

export function userDataReducer(state = {}, action) {
    switch (action.type) {
        case USER_RESPONSE_SUCCESS:
            return action.data;
        default :
            return state;
    }
}