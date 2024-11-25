import { ProductState } from "../context/Product_Context";
import { Action } from "../types/Action";
import Product from "../types/Product";

export const ProductReducer = (state: ProductState, action: Action<Product>): ProductState => {
    switch (action.type) {
        case 'GET_PRODUCTS_SUCCESS':
            return { ...state, allProducts: action.payload as Product[], areProductsLoading: false };
        default:
            return state;
    }
}
