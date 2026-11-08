import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slice/productSlice'


const productStore=configureStore({
    reducer:{
        productReducer:productSlice

    }
})

export default productStore