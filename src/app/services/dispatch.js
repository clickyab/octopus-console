import store from "../redux/store/store";

export function dispatch(action) {
    store.dispatch(action);
}