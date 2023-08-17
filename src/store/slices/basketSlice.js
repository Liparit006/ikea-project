import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basketSlice",
    initialState: {
        products: []
    },
    reducers: {
        handleClick(state, { payload }) {
            state.products = payload.productsFilter
        }
    }
})
export const selectBasket = ((state) => state.basketSlice.products)
export const { handleClick } = basketSlice.actions
export default basketSlice.reducer