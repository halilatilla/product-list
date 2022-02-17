import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IBasket {
  productId: string
  imgUrl: string
  title: string
}

const initialState: IBasket[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IBasket>) => {
      state.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.productId !== action.payload)
    },
  },
})

export default cartSlice.reducer
export const { addToCart } = cartSlice.actions
