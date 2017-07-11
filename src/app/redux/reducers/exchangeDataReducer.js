import {GET_EXCHANGE_DATA} from "../actions/index";

export function exchangeDataReducer(state = {}, action) {
    switch (action.type) {
        case GET_EXCHANGE_DATA:
            return action.data;
        default :
            return state;
    }
}