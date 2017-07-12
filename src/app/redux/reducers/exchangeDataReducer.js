import {GET_EXCHANGE_DATA, LOGIN_FAILED} from "../actions/index";

export function exchangeDataReducer(state = {}, action) {
    switch (action.type) {
        case GET_EXCHANGE_DATA:
            return action.data;
        case LOGIN_FAILED:
            return {};
        default :
            return state;
    }
}