import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../lib/data"

const ProductSlice = createSlice({
    name: "Productslice",
    initialState: {
        Product: data,
    },
    reducers: {
        enlargeProductsCount(state, { payload }) {
            const chosenProducts = state.Product.find((el) => el.id === payload.id)
            if (chosenProducts.count > 0) {
                chosenProducts.count--
                chosenProducts.basketCount++
            }
            
        },

        shortenProductsCount(state, { payload }) {
            const chosenProducts = state.Product.find((el) => el.id === payload.id)
            chosenProducts.count++
            chosenProducts.basketCount--
        }
    }
})

export const { enlargeProductsCount, shortenProductsCount } = ProductSlice.actions
export const selectProduct = ((state) => state.Productslice.Product) 
export default ProductSlice.reducer
