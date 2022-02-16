import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IBasket {
  id: string
  title: string
  completed: boolean
}

const initialState: IBasket[] = []

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IBasket>) => {
      state.push(action.payload)
    },
  },
})

export default basketSlice.reducer
export const { addToBasket } = basketSlice.actions
