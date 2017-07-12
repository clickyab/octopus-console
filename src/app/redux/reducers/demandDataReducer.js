import {GET_DEMAND_DATA, LOGIN_FAILED} from "../actions/index";

export function demandDataReducer(state = {}, action) {
    switch (action.type) {
        case GET_DEMAND_DATA:
            return action.data;
        case LOGIN_FAILED:
            return {};
        default :
            return state;
    }
}