import {GET_DEMAND_DATA} from "../actions/index";

export function demandDataReducer(state = {}, action) {
    switch (action.type) {
        case GET_DEMAND_DATA:
            return action.data;
        default :
            return state;
    }
}