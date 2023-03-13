import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    productReducerState: productReducer,
    cartReducerState: cardReducer
})

export default rootReducer;