import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICart } from '@src/types'

const initialState: ICart[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      state.push(action.payload)
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.productId !== action.payload)
    },
    updateCartItems: (state, action: PayloadAction<ICart[]>) => {
      return (state = action.payload)
    },
  },
})

export default cartSlice.reducer
export const { addToCart, removeItemFromCart, updateCartItems } = cartSlice.actions
