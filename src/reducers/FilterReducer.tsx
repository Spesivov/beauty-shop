import { FilterState } from "../context/Filter_Context";
import Product from "../types/Product";
import { FilterAction } from "../context/Filter_Context";

export const FilterReducer = (state: FilterState, action: FilterAction): FilterState => {
    switch (action.type) {
        case 'FILTER_PRODUCTS':
            {
                const { searchTerm } = state.filters;
                const allProducts: Product[] = (action.payload as Product[]) || [];
                const filteredProducts: Product[] = allProducts?.filter(product => {
                    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
                });

                return { ...state, filteredProducts };
            }

        case 'SET_FILTERS':
            return { ...state, filters: { ...state.filters, ...action.payload } };

        default:
            return state;
    }
}