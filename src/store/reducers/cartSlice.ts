import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IBasket {
  id: string
  title: string
  completed: boolean
}

const initialState: IBasket[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IBasket>) => {
      state.push(action.payload)
    },
  },
})

export default cartSlice.reducer
export const { addToCart } = cartSlice.actions
