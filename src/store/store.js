import { configureStore } from "@reduxjs/toolkit";
import Productslice from "./slices/productSlice";
import basketSlice from "./slices/basketSlice";
const store = configureStore({
    reducer: {
        Productslice,
        basketSlice
    }
})

export default store