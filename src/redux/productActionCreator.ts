import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR } from "./actionTypes";
import { Product } from "./dataType";
const baseUrl = "http://localhost:8080";
const productsUrl = `${baseUrl}/products`

export const fetchProducts = ()=> async (dispatch: Dispatch) => {
    try {
        const resp = await axios.get(productsUrl);
        const products = resp.data as Product[];
        return dispatch({ type: FETCH_PRODUCTS, payload: products })
    } catch (error) {
        console.log(error)
        return dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error })
    }
}