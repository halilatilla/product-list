import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilterState } from '@src/types'

const initialState: IFilterState = {
  filterBy: {
    color: '',
    brand: '',
  },
  orderBy: '',
  filteredProducts: [],
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload
    },

    setOrderBy: (state, action: PayloadAction<string>) => {
      state.orderBy = action.payload
    },
    setFilterBy: (state, action: PayloadAction<{ value: string; productValue: string }>) => {
      /* @ts-ignore */
      state.filterBy[action.payload.productValue] = action.payload.value
    },
    updateFilterBy: (state, action) => {
      state.filterBy = action.payload
    },
  },
})

export default filterSlice.reducer
export const { setFilteredProducts, setOrderBy, setFilterBy, updateFilterBy } = filterSlice.actions
