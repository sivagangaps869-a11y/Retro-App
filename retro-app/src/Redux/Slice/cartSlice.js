import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cart.find(
                item => item.id === action.payload.id
            );

            // Do not add the same second-hand item twice
            if (!existingProduct) {
                state.cart.push(action.payload);
            }
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                item => item.id !== action.payload
            );
        },

        clearCart: (state) => {
            state.cart = [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;