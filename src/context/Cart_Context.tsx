import React, { useReducer, useContext, useEffect } from 'react';
import Product from "../types/Product";
import { CartReducer } from '../reducers/CartReducer';

export interface CartState {
    cartItems: Product[];
    total: number;
    amount: number;
    count: number;
    isCartSliderVisible: boolean;
    increaseProductCount: (product: Product) => void;
    decreaseProductCount: (product: Product) => void;
    calculateProductPrice: (id: string) => number;
    getProductCount: (id: string) => number;
    getTotalPrice: () => number;
    removeProduct: (product: Product) => void;
}

export const defaultState: CartState = {
    cartItems: [],
    total: 0,
    amount: 0,
    count: 0,
    isCartSliderVisible: false,
    increaseProductCount: () => null,
    decreaseProductCount: () => null,
    calculateProductPrice: () => 0,
    getProductCount: () => 1,
    getTotalPrice: () => 0,
    removeProduct: () => null
};

interface CartProviderProps {
    children: React.ReactNode | React.ReactElement;
}

type CartContextType = CartState & { dispatch: React.Dispatch<any> };

const CartContext = React.createContext<CartContextType>({
    ...defaultState,
    dispatch: () => null
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, defaultState);

    const increaseProductCount= (product: Product) => {
        dispatch({
            type: 'INCREASE_PRODUCT_COUNT',
            payload: product
        });
    };

    const decreaseProductCount = (product: Product) => {
        dispatch({
            type: 'DECREASE_PRODUCT_COUNT',
            payload: product
        });
    };

    const calculateProductPrice = (id: string) => {
        const product = state.cartItems.find(item => item.id === id);
        if (!product || typeof product.price !== 'number') return 0;
        
        console.log(`Product price is ${product.price} and count is ${product.count}`);
        return product.price * product.count;
    };

    const getProductCount = (id: string): number => {
        const product = state.cartItems.find(item => item.id === id);
        return product ? product.count : 0;
    };
  
    const removeProduct = (product: Product) => {
        dispatch({ type: "REMOVE_PRODUCT", payload: product });

        if(state.cartItems.length === 1) {
            dispatch({ type: "TOGGLE_CART" });
        }
    }

    const getTotalPrice = () => {
        return state.total;
    };

    useEffect(() => {
        dispatch({ type: "UPDATE_TOTALS" });
    }, [state.cartItems]);
    
    useEffect(() => {
        try {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            dispatch({ type: "GET_CART_ITEMS", payload: cart });
        } catch (error) {
            console.error("Failed to parse cart from localStorage", error);
            dispatch({ type: "GET_CART_ITEMS", payload: [] });
        }
    }, []);

    return (
        <CartContext.Provider value={{ ...state, getTotalPrice, removeProduct, getProductCount, calculateProductPrice, decreaseProductCount, increaseProductCount, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    return useContext(CartContext);
}
