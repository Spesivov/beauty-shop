import React, { useReducer, useContext, useEffect } from 'react';
import { FilterReducer } from "../reducers/FilterReducer.tsx"
import { useProductsContext } from './Product_Context.tsx';
import Product from '../types/Product.tsx';

export interface FilterState {
    searchTerm: string;
    filteredProducts: Product[];
    sort: string;
    filters: {
        searchTerm: string;
    }
}

const defaultState: FilterState = {
    searchTerm: '',
    filteredProducts: [],
    sort: 'default',
    filters: {
        searchTerm: ''
    }
};

interface FilterProviderProps {
    children: React.ReactNode | React.ReactElement;
}

type FilterContextType = FilterState & { dispatch: React.Dispatch<any> };

const FilterContext = React.createContext<FilterContextType>({
    ...defaultState,
    dispatch: () => null
});

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
    const { allProducts } = useProductsContext();
    const [state, dispatch] = useReducer(FilterReducer, defaultState);

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS", payload: allProducts });
        dispatch({ type: "SORT_PRODUCTS"}); //will add diff kind of sorting later
    }, [allProducts, state.sort, state.filters]);

    return (
        <FilterContext.Provider value={{ ...state, dispatch }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => useContext(FilterContext);