import { CREATE_ORDER, FETCH_ORDER_HISTORY } from "../actions/actionTypes";
import { IAction, Order } from "../dataType";

interface IOrdersReducerState {
    orders: Order[];
}

const initialState: IOrdersReducerState = {
    orders: []
};

const ordersReducer = (state: IOrdersReducerState = initialState, action: IAction): IOrdersReducerState => {
    console.log('ordersReducer called with action', action);

    if (action.type === FETCH_ORDER_HISTORY) {
        return { ...state, orders: action.payload };
    }

    if (action.type === CREATE_ORDER) {
        const orders = [...state.orders];
        orders.push(action.payload);
        return { ...state, orders };
    }

    return { ...state };
};

export default ordersReducer;