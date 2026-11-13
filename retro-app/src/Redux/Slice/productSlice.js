import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",

    initialState: {
        products: []
    },

    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },

        setProducts: (state, action) => {
            state.products = action.payload;
        }
    }
});

export const { addProduct, setProducts } = productSlice.actions;

export default productSlice.reducer;