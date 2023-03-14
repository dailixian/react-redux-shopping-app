import { ADD_TO_CART, DECREASE_QUANTITY, EMPTY_CART, INCREASE_QUANTITY, REMOVE_FROM_CART } from "./actionTypes";
import { Product } from "./dataType";

export const addToCart = (product: Product) => ({
    type: ADD_TO_CART,
    payload: product
})
export const increaseQuantity = (product: Product) => ({
    type: INCREASE_QUANTITY,
    payload: product
})
export const decreaseQuantity = (product: Product) => ({
    type: DECREASE_QUANTITY,
    payload: product
})

export const removeFromCart = (product: Product) => ({
    type: REMOVE_FROM_CART,
    payload: product
})

export const emptyCart = () => ({
    type: EMPTY_CART,
})