import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from "./actionTypes";
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