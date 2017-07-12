import {SIDEBAR_STATE, LOGIN_FAILED} from "../actions/index";

export function sidebarStateReducer(state = "dashboard", action) {
    switch (action.type) {
        case SIDEBAR_STATE:
            return action.data;
        case LOGIN_FAILED:
            return "";
        default :
            return state;
    }
}