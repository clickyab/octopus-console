import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {createLogger} from "redux-logger";
import {loginReducer} from "../reducers/loginReducer";
import {loadState, saveState} from './localStorage';
import {userDataReducer} from "../reducers/userDataReducer";
import {demandDataReducer} from "../reducers/demandDataReducer";
import {supplierDataReducer} from "../reducers/supplierDataReducer";
import {exchangeDataReducer} from "../reducers/exchangeDataReducer";
import {sidebarStateReducer} from "../reducers/sidebarStateReducer";

const logger = createLogger();
const persistedState = loadState();
let enhancer;

const rootReducer = (state, action) => {
    return combineReducers({
        //Store object is here
        isLogin: loginReducer,
        userData: userDataReducer,
        demandData: demandDataReducer,
        supplierData: supplierDataReducer,
        exchangeData: exchangeDataReducer,
        sidebarState: sidebarStateReducer
    })(state, action);
};


if (process.env.NODE_ENV !== 'production') {
    enhancer = compose(
        applyMiddleware(
            logger
        ),
    );

} else {
    enhancer = compose(
        applyMiddleware(),
    );
}


let store = createStore(
    rootReducer,
    persistedState,
    enhancer
);


store.subscribe(() => {
    saveState(store.getState())
});


export default store;