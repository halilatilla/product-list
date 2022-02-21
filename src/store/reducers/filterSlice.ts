import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilterState } from '@src/types'

const initialState: IFilterState = {
  filterByBrand: '',
  filterByColor: '',
  sortingBy: '',
  searchTerm: '',
  filteredProducts: [],
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload
    },

    setSortingBy: (state, action: PayloadAction<string>) => {
      state.sortingBy = action.payload
    },
    setFilterByColor: (state, action) => {
      state.filterByColor = action.payload
    },
    setFilterByBrand: (state, action) => {
      state.filterByBrand = action.payload
    },

    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
  },
})

export default filterSlice.reducer
export const { setFilteredProducts, setSortingBy, setFilterByColor, setSearchTerm, setFilterByBrand } =
  filterSlice.actions
