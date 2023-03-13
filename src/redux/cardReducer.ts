import { LineItem } from "./dataType";

interface CartState {
    cart: LineItem[]
}

interface CartAction {
    type: string;
    payload?: any;
}

const initialCartState = { cart: [{ quantity: 1 }] }


const cardReducer = (state: CartState = initialCartState, action: CartAction) => {

    return { ...state }
}

export default cardReducer;