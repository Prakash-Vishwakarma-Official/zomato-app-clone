import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}
let holdActionPayload = []
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {

            holdActionPayload.push(action.payload)
            state.cart = [...holdActionPayload]
        },
        removeCart: (state, action) => {
            state.cart.pop()
            holdActionPayload = [...state.cart]
            state.cart = [...holdActionPayload]
        },

    },
})

export const { addCart, removeCart } = cartSlice.actions

export default cartSlice.reducer