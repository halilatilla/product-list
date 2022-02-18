import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'

import cartSlice from './reducers/cartSlice'
import searchSlice from './reducers/searchSlice'
import selectSlice from './reducers/selectSlice'
import filterSlice from './reducers/filterSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    search: searchSlice,
    select: selectSlice,
    filter: filterSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
