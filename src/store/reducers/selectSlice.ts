import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedItem: '',
}

const selectSlice = createSlice({
  name: 'select',
  initialState: initialState,
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload
    },
  },
})

export default selectSlice.reducer
export const { setSelectedItem } = selectSlice.actions
