import { CartState } from "../context/Cart_Context";
import { Action } from "../types/Action";
import Product from "../types/Product";

export const CartReducer = (state: CartState, action: Action<Product>): CartState => {
    let newState: CartState;
    switch (action.type) {
        case 'GET_CART_ITEMS':
            const addedProducts: Product[] = Array.isArray(action.payload) ? action.payload : [];
            newState = { ...state, cartItems: addedProducts };
            break;

        case 'ADD_TO_CART':
            const newCartItems = [...state.cartItems, action.payload] as Product[];
            newState = { ...state, cartItems: newCartItems };
            break;

        case 'GET_ITEMS_COUNT':
            const cartCount = state.cartItems.length;
            newState = { ...state, amount: cartCount };
            break;

        case 'REMOVE_PRODUCT':
            const updatedCartItems = state.cartItems.filter(item => item.id !== (action.payload as Product).id);
            newState = { ...state, cartItems: updatedCartItems };
            break;

        case 'TOGGLE_CART':
            newState = { ...state, isCartSliderVisible: !state.isCartSliderVisible };
            break

        default:
            newState = state;
    }

    localStorage.setItem("cart", JSON.stringify(newState.cartItems));
    return newState;
};