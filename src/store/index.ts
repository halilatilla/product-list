export { addToCart, removeItemFromCart, updateCartItems } from './reducers/cartSlice'
export {
  setFilteredProducts,
  setFilterByColor,
  setFilterByBrand,
  setSortingBy,
  setSearchTerm,
} from './reducers/filterSlice'

export { useAppDispatch, useAppSelector } from './store'
