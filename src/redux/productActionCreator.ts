import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_BRANDS, FETCH_CATEGORIES, FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR } from "./actionTypes";
import { Product } from "./dataType";
const baseUrl = "http://localhost:8080";
const productsUrl = `${baseUrl}/products`
const categoriesUrl = `${baseUrl}/categories`
const brandsUrl = `${baseUrl}/brands`

export const fetchProducts = () => async (dispatch: Dispatch) => {
    try {
        const resp = await axios.get(productsUrl);
        const products = resp.data as Product[];
        dispatch({ type: FETCH_PRODUCTS, payload: products })
    } catch (error) {
        console.log(error)
        dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error })
    }
}

export const fetchProductsByBrand = (brand: string) => async (dispatch: Dispatch) => {
    try {
        const resp = await axios.get(productsUrl, { params: { brand } });
        dispatch({ type: FETCH_PRODUCTS, payload: resp.data })
    } catch (error) {
        console.log(error)
        dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error })
    }
}

export const fetchProductsByCategory = (category: string) => async (dispatch: Dispatch) => {
    try {
        const resp = await axios.get(productsUrl, { params: { category } });
        dispatch({ type: FETCH_PRODUCTS, payload: resp.data })
    } catch (error) {
        console.log(error)
        dispatch({ type: FETCH_PRODUCTS, payload: error })
    }
}

export const fetchCategories = () => async (dispatch: Dispatch) => {
    try {
        const resp = await axios.get(categoriesUrl);
        dispatch({ type: FETCH_CATEGORIES, payload: resp.data })

    } catch (error) {
        console.log(error)
        dispatch({ type: FETCH_CATEGORIES, payload: error })
    }

}

export const fetchBrands = () => async (dispatch: Dispatch) => {
    try {
        const resp = await axios.get(brandsUrl);
        dispatch({ type: FETCH_BRANDS, payload: resp.data })
    } catch (error) {
        console.log(error)
        dispatch({ type: FETCH_BRANDS, payload: error })
    }

}