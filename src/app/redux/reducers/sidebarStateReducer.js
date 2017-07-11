import {SIDEBAR_STATE} from "../actions/index";

export function sidebarStateReducer(state = "dashboard", action) {
    switch (action.type) {
        case SIDEBAR_STATE:
            return action.data;
        default :
            return state;
    }
}