import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const localStateName = "reduxState"
export type RootStoreType = ReturnType<typeof store.getState>;

const savedState = localStorage.getItem(localStateName);
const preState = savedState ? JSON.parse(savedState) : {};
const store = createStore(rootReducer, preState, applyMiddleware(thunk));
window.store = store;
//store keep updating local storage with store state
store.subscribe(() => {
    localStorage.setItem(localStateName, JSON.stringify(store.getState()));
})
export default store;
