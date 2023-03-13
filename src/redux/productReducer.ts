import { act } from "react-dom/test-utils";
import { FETCH_PRODUCTS } from "./actionTypes";
import { Product } from "./dataType";

const initialState = {
    products: []
}

interface Action {
    type: string;
    payload?: any;
}

interface State {
    products: Array<Product>
}

const productReducer = (state: State = initialState, action: Action) => {
    if (action.type === FETCH_PRODUCTS) {
        return { ...state, products: action.payload }
    }
    return { ...state }
}

export default productReducer