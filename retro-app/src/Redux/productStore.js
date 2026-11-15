import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slice/productSlice'
import authSlice from './Slice/authSlice'
import wishlistSlice from './Slice/wishlistSlice'

const productStore=configureStore({
    reducer:{
        productReducer:productSlice,
        authReducer:authSlice,
        wishlistReducer: wishlistSlice
    }
})

export default productStore