import {GET_SUPPLIER_DATA} from "../actions/index";

export function supplierDataReducer(state = {}, action) {
    switch (action.type) {
        case GET_SUPPLIER_DATA:
            return action.data;
        default :
            return state;
    }
}