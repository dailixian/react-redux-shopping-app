import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from "./actionTypes";
import { LineItem } from "./dataType";

interface CartState {
    cart: LineItem[]
}

interface CartAction {
    type: string;
    payload?: any;
}

const initialCartState = { cart: [] }

const cardReducer = (state: CartState = initialCartState, action: CartAction) => {

    if (action.type === ADD_TO_CART) {
        const cart = [...state.cart];
        const li = cart.find(li => li.product?.id === action.payload.id)
        if (li) return { ...state };
        cart.push({ quantity: 1, product: action.payload });
        return { ...state, cart };
    }

    if (action.type === INCREASE_QUANTITY) {
        const cart = [...state.cart];
        const li = cart.find(li => li.product?.id === action.payload.id)
        if (li) {
            li.quantity++;
        }
        return { ...state, cart }
    }

    if (action.type === DECREASE_QUANTITY) {
        const cart = [...state.cart];
        const index = cart.findIndex(li => li.product?.id === action.payload.id)
        if (index !== -1) {
            const li = cart[index];
            li.quantity--;
            if (li.quantity === 0) {
                cart.splice(index, 1);
            }
        }
        return { ...state, cart }
    }
    return { ...state }
}

export default cardReducer;