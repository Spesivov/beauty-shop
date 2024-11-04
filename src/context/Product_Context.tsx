import React, { useContext, useEffect, useReducer } from "react"
import Product from '../types/Product.tsx'
import axios from 'axios'
import { ProductReducer } from "../reducers/ProductReducer.tsx"

export type initialState = {
    allProducts: Product[],
    areProductsLoading: boolean
}

const defaultState: initialState = {
    allProducts: [],
    areProductsLoading: true
}

interface ProductsProviderProps {
    children: React.ReactNode | React.ReactElement;
}


const ProductContext = React.createContext(defaultState);

export const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, defaultState)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await axios.get('https://fakestoreapi.com/products');
                console.log("Products fetched:", result.data);

                const products: Product[] = result.data;
                dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products })
            }
            catch {
                console.error("Error fetching products:");
            }
        }
        fetchProducts()
    }, []);

    return (
        <ProductContext.Provider value={{ ...state }}>
            {children}
        </ProductContext.Provider>
    );
}

export const useProductsContext = () => {
    return useContext(ProductContext)
}