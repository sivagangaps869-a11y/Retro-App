import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slice/productSlice'
import authSlice from './Slice/authSlice'
import cartSlice from './Slice/cartSlice';
const productStore=configureStore({
    reducer:{
        productReducer:productSlice,
        authReducer:authSlice,
        cartReducer: cartSlice
    }
})

export default productStore