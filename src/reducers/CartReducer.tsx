import { CartState } from "../context/Cart_Context";
import { Action } from "../types/Action";
import Product from "../types/Product";

export const CartReducer = (state: CartState, action: Action<Product>): CartState => {
    let newState: CartState;
    switch (action.type) {
        case 'GET_CART_ITEMS':
            {
                const addedProducts: Product[] = Array.isArray(action.payload) ? action.payload : [];
                newState = { ...state, cartItems: addedProducts };
                break;
            }

        case 'ADD_TO_CART':
            {
                const existingProduct = state.cartItems.find(item => item.id === (action.payload as Product).id);
                if (existingProduct) {
                    const updatedCartItems = state.cartItems.map(item => {
                        if (item.id === (action.payload as Product).id) {
                            item.count += 1;
                        }
                        return item;
                    });
                    newState = { ...state, cartItems: updatedCartItems };
                }

                const newProduct = { ...action.payload, count: 1 } as Product;
                const newCartItems = [...state.cartItems, newProduct];
                newState = { ...state, cartItems: newCartItems };
                break;
            }

        case 'UPDATE_TOTALS':
            {
                const total = state.cartItems.reduce((total, item) => total + item.price * item.count, 0);
                newState = { ...state, total };
                break;
            }

        case 'REMOVE_PRODUCT':
            {
                const updatedCartItems = state.cartItems.filter(item => item.id !== (action.payload as Product).id);
                newState = { ...state, cartItems: updatedCartItems };
                break;
            }

        case 'TOGGLE_CART':
            newState = { ...state, isCartSliderVisible: !state.isCartSliderVisible };
            break

        case 'INCREASE_PRODUCT_COUNT':
            {
                const increasedCartItems = state.cartItems.map(item => {
                    if (item.id === (action.payload as Product).id) {
                        item.count += 1;
                    }
                    return item;
                });
                newState = { ...state, cartItems: increasedCartItems };
                break;
            }

        case 'DECREASE_PRODUCT_COUNT':
            {
                const decreasedCartItems = state.cartItems.map(item => {
                    if (item.id === (action.payload as Product).id && item.count > 1) {
                        return { ...item, count: item.count - 1 };
                    }
                    return item;
                });
                newState = { ...state, cartItems: decreasedCartItems };
                break;
            }
        default:
            newState = state;
    }

    localStorage.setItem("cart", JSON.stringify(newState.cartItems));
    return newState;
};