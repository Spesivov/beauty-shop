import { initialState } from "../context/ProductContext";
import Product from "../types/Product";

const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";

interface Action<T> {
    type: string;
    payload?: T[];
}

interface GetProductsSuccessAction extends Action<Product> {
    type: typeof GET_PRODUCTS_SUCCESS;
    payload: Product[];
}

export const ProductReducer = (state: initialState, action: GetProductsSuccessAction) => {
    switch (action.type) {
        case 'GET_PRODUCTS_SUCCESS':
            return { ...state, allProducts: action.payload, areProductsLoading: false };
        default:
            return state;
    }
}
