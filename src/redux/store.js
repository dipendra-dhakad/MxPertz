import { configureStore } from "@reduxjs/toolkit";
import  CartSlice  from "./slices/cartSlice";
import pageSlice from "./slices/pageSlice";
 export const store = configureStore({
    reducer:{
        cart:CartSlice,
        page:pageSlice
    },
 });