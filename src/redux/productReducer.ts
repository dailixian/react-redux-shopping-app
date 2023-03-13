import { Product } from "./dataType";

const initialState = {
    products: [{
        "id": 1,
        "category": "vegetable",
        "name": "Onion",
        "brand": "Fresho",
        "description": "Onion - Medium",
        "quantity_per_unit": "1 KG, approx. 10 to 12 nos",
        "unit_price": 45,
        "picture": "http://localhost:8080/product-images/10000148_13-fresho-onion-medium.jpg",
        "discount": 22
    },
    {
        "id": 2,
        "category": "vegetable",
        "name": "Potato",
        "brand": "Fresho",
        "description": "Potato",
        "quantity_per_unit": "1 KG, approx. 9 to 10 nos",
        "unit_price": 25,
        "picture": "http://localhost:8080/product-images/10000159_14-fresho-potato.jpg",
        "discount": 2
    },
    {
        "id": 3,
        "category": "vegetable",
        "name": "Tomato",
        "brand": "Malnad",
        "description": "Hybrid tomato",
        "quantity_per_unit": "500 GM, approx. 6 to 7 nos",
        "unit_price": 28,
        "picture": "http://localhost:8080/product-images/10000201_12-fresho-tomato-hybrid.jpg",
        "discount": 12
    },]
}

interface Action {
    type: string;
    payload?: any;
}

interface State {
    products: Array<Product>
}

const productReducer = (state = initialState, action: Action) => {
    return { ...state }
}

export default productReducer