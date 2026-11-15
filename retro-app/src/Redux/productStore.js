import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slice/productSlice'
import authSlice from './Slice/authSlice'
import wishlistSlice from './Slice/wishlistSlice'
import cartSlice from './Slice/cartSlice'
const productStore=configureStore({
    reducer:{
        productReducer:productSlice,
        authReducer:authSlice,
        wishlistReducer: wishlistSlice,
        cartReducer: cartSlice
    }
})

export default productStore