import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },

    reducers: {

        addToCart: (state, action) => {
            const product = action.payload;
            const exist = state.cart.find(item => item.id === product.id);

            if (!exist) {
                state.cart.push(product);
            }
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                item => item.id !== action.payload);

        }

    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;