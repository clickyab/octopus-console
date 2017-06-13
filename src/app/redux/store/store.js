import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {createLogger} from "redux-logger";
import loginReducer from "../reducers/loginReducer";
import {loadState, saveState} from './localStorage';


const logger = createLogger();

const rootReducer = (state, action) => {
    return combineReducers({
        //Store object is here
        isLogin: loginReducer
    })(state, action);
};

let enhancer = compose(
    applyMiddleware(
        logger
    ),
);


const persistedState = loadState();
let store = createStore(
    rootReducer,
    persistedState,
    enhancer
);


store.subscribe(() => {
    saveState(store.getState())
});


export default store;