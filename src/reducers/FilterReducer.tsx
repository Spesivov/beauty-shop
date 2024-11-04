import { FilterState } from "../context/Filter_Context";
import Product from "../types/Product";
import { Action } from "../types/Action";


export const FilterReducer = (state: FilterState, action: Action<Product>): FilterState => {
    switch (action.type) {
        case 'FILTER_PRODUCTS':
            const { searchTerm } = state.filters;
            const allProducts: Product[] = action.payload || [];
            let filteredProducts: Product [] = allProducts?.filter(product => {
                return product.title.toLowerCase().includes(searchTerm.toLowerCase());
            });

            return { ...state, filteredProducts };

        case 'SET_FILTERS':
            return { ...state, filters: { ...state.filters, ...action.payload } };

        default:
            return state;
    }
}