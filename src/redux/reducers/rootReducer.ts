import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import ordersReducer from "./ordersReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    productReducerState: productReducer,
    cartReducerState: cartReducer,
    authReducerState: authReducer,
    ordersReducerState: ordersReducer
})

export default rootReducer;