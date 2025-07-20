import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
    },
    reducers: {
        cartTotal: (state, action) => {
            const findIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (findIndex >= 0) {
                state.cartItems[findIndex].cartQun += 1
            } else {
                state.cartItems.push({...action.payload, cartQun: 1})
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
    }
})

export const { cartTotal } = cartSlice.actions

export default cartSlice.reducer