import { useEffect } from 'react'

import { useAppSelector, useAppDispatch, setFilteredProducts } from '@src/store'
import { ORDER_OPTIONS_SELECT, orderByKeys } from '@src/constants'
import { getSortedByDate, getSortedPriceByDiscount } from '@src/lib'
import { Select } from '@src/components'

const Order = () => {
  const { filteredProducts, orderBy } = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const sortedProducts = Array.from(filteredProducts)?.sort((a, b) => {
      if (orderBy === orderByKeys.ZA) {
        return getSortedByDate(b.createdDate, a.createdDate)
      }
      if (orderBy === orderByKeys.MAX) {
        return getSortedPriceByDiscount(
          { price: a.price, discount: a.discount },
          { price: b.price, discount: b.discount },
        )
      }
      if (orderBy === orderByKeys.MIN) {
        return getSortedPriceByDiscount(
          { price: b.price, discount: b.discount },
          { price: a.price, discount: a.discount },
        )
      }
      return getSortedByDate(a.createdDate, b.createdDate)
    })

    dispatch(setFilteredProducts(sortedProducts))
  }, [orderBy])
  return <Select options={ORDER_OPTIONS_SELECT} />
}

export default Order
