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
                state.cartItems.push({ ...action.payload, cartQun: 1 })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        cartQuntity: (state, action) => {
            if (action.payload.type === "increment") {
                state.cartItems[action.payload.id].cartQun += 1;
            } else if (action.payload.type === "decrement") {
                if (state.cartItems[action.payload.id].cartQun > 0) {
                    state.cartItems[action.payload.id].cartQun -= 1;
                }
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
    }
})

export const { cartTotal, cartQuntity, removeFromCart } = cartSlice.actions

export default cartSlice.reducer