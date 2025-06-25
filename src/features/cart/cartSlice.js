import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cart")) || [],
    loading: false,
    error: null
}

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            saveCartToLocalStorage(state.cartItems);
        },
        removeFromCart: (state, action) => {
            const existingItem  = state.cartItems.find((item) => item.id === action.payload.id);
            if (existingItem .quantity > 1) {
                existingItem .quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            }
            saveCartToLocalStorage(state.cartItems);
        },
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.removeItem("cart");
        }
    }
})