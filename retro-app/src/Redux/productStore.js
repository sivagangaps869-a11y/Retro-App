import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slice/productSlice'
import authSlice from './Slice/authSlice'

const productStore=configureStore({
    reducer:{
        productReducer:productSlice,
        authReducer:authSlice,

    }
})

export default productStore