import React, { useReducer, useContext, useEffect } from 'react';
import Product from "../types/Product";
import { CartReducer } from '../reducers/CartReducer';

export interface CartState {
    cartItems: Product[];
    total: number;
    amount: number;
}

export const defaultState: CartState = {
    cartItems: [],
    total: 0,
    amount: 0
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
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    return useContext(CartContext);
}
