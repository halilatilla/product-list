import { createSlice } from '@reduxjs/toolkit'
import { IFilterState } from '@src/types'

const initialState: IFilterState = {
  filterBy: [],
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

    setOrderBy: (state, action) => {
      state.orderBy = action.payload
    },
    setFilterBy: (state, action) => {
      state.filterBy.push(action.payload)
    },
    updateFilterBy: (state, action) => {
      state.filterBy = action.payload
    },
  },
})

export default filterSlice.reducer
export const { setFilteredProducts, setOrderBy, setFilterBy, updateFilterBy } = filterSlice.actions
