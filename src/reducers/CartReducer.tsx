import { CartState } from "../context/Cart_Context";
import { Action } from "../types/Action";
import Product from "../types/Product";

export const CartReducer = (state: CartState, action: Action<Product>): CartState => {
    let newState: CartState;
    switch (action.type) {
        case 'GET_CART_ITEMS':
            const addedProducts: Product[] = action.payload || [];
            newState = { ...state, cartItems: addedProducts };
            break;

        case 'ADD_TO_CART':
            const updatedCartItems = [...state.cartItems, action.payload] as Product[];
            newState = { ...state, cartItems: updatedCartItems};
            break;

        case 'GET_ITEMS_COUNT':
            const cartCount = state.cartItems.length;
            newState = { ...state, amount: cartCount };
            break;

        default:
            newState = state;
    }

    localStorage.setItem("cart", JSON.stringify(newState.cartItems));
    return newState;
};