import React, { useReducer, useContext, useEffect, useState } from 'react';
import Product from "../types/Product";
import { CartReducer } from '../reducers/CartReducer';

export interface CartState {
    cartItems: Product[];
    total: number;
    amount: number;
    isCartSliderVisible: boolean;
    increaseProductQuantity: (id: string) => void;
    decreaseProductQuantity: (id: string) => void;
    calculateProductPrice: (id: string) => string;
    getProductCount: (id: string) => number;
    getTotalPrice: () => string;
    removeProduct: (product: Product) => void;
}

export const defaultState: CartState = {
    cartItems: [],
    total: 0,
    amount: 0,
    isCartSliderVisible: false,
    increaseProductQuantity: () => null,
    decreaseProductQuantity: () => null,
    calculateProductPrice: () => "0.00",
    getProductCount: () => 0,
    getTotalPrice: () => "0.00",
    removeProduct: () => null
};

interface CartProviderProps {
    children: React.ReactNode | React.ReactElement;
}

type CartContextType = CartState & { dispatch: React.Dispatch<any> };

const CartContext = React.createContext<CartContextType>({
    ...defaultState,
    increaseProductQuantity: () => null,
    decreaseProductQuantity: () => null,
    calculateProductPrice: () => "0.00",
    getProductCount: () => 0,
    removeProduct: () => null,
    getTotalPrice: () => "0.00",
    dispatch: () => null
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, defaultState);
    const [productCount, setproductCount] = useState<{ [productId: string]: number }>({});

    const increaseProductQuantity = (id: string) => setproductCount(prevCount => {
        const product = state.cartItems.find(item => item.id === id);
        if (!product) return prevCount;

        return {
            ...prevCount,
            [id]: (prevCount[id] || 1) + 1
        };
    });

    const decreaseProductQuantity = (id: string) => setproductCount(prevCount => {
        const product = state.cartItems.find(item => item.id === id);
        if (!product) return prevCount;

        return {
            ...prevCount,
            [id]: Math.max((prevCount[id] || 0) - 1, 0)
        };
    });

    const calculateProductPrice = (id: string) => {
        const product = state.cartItems.find(item => item.id === id);
        if (!product) return "0.00";

        return (product.price * (productCount[id] || 1)).toFixed(2);
    }

    const getProductCount = (id: string) => productCount[id] || 1;
  
    const removeProduct = (product: Product) => {
        console.log("Removing product with id", product.id, state.cartItems.length);
        dispatch({ type: "REMOVE_PRODUCT", payload: product });

        if(state.cartItems.length === 1) {
            dispatch({ type: "TOGGLE_CART" });
        }
    }

    const getTotalPrice = () => state.cartItems.reduce((total, item) => total + item.price, 0).toFixed(2).toString();;
   
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
        <CartContext.Provider value={{ ...state, removeProduct, getTotalPrice, getProductCount, calculateProductPrice, decreaseProductQuantity, increaseProductQuantity, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    return useContext(CartContext);
}
