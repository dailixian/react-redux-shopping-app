import { FETCH_BRANDS, FETCH_CATEGORIES, FETCH_PRODUCTS } from "../actions/actionTypes";
import { IAction, Product } from "../dataType";

const initialState: State = {
    products: [],
    categories: [],
    brands: []
}

interface State {
    products: Product[],
    categories: string[],
    brands: string[]
}

const productReducer = (state: State = initialState, action: IAction) => {
    if (action.type === FETCH_PRODUCTS) {
        return { ...state, products: action.payload }
    }
    if (action.type === FETCH_CATEGORIES) {
        return { ...state, categories: action.payload }
    }
    if (action.type === FETCH_BRANDS) {
        return { ...state, brands: action.payload }
    }
    return { ...state }
}

export default productReducer