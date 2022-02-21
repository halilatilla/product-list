// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import cartSlice from '@src/store/reducers/cartSlice'
import filterSlice from '@src/store/reducers/filterSlice'

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { cart: cartSlice, filter: filterSlice }, preloadedState }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
