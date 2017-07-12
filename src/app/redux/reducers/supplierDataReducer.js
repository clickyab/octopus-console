import {GET_SUPPLIER_DATA, LOGIN_FAILED} from "../actions/index";

export function supplierDataReducer(state = {}, action) {
    switch (action.type) {
        case GET_SUPPLIER_DATA:
            return action.data;
        case LOGIN_FAILED:
            return {};
        default :
            return state;
    }
}