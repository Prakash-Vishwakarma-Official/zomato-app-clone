import { configureStore } from '@reduxjs/toolkit'
import addCart from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart:addCart
  },
})