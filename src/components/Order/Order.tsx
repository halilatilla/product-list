import { useEffect } from 'react'

import { useAppSelector, useAppDispatch, setFilteredProducts } from '@src/store'
import { getPriceDiscount } from '@src/lib'
import { Select } from '@src/components'
import { orderOptions } from '@src/constants'

const options = [{ value: '', label: 'sıralama' }, ...orderOptions]

const Order = () => {
  const { filteredProducts, orderBy } = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const sortedProducts = Array.from(filteredProducts)?.sort((a, b) => {
      if (orderBy === 'za') {
        /* @ts-ignore */
        return new Date(b.createdDate) - new Date(a.createdDate)
      }
      if (orderBy === 'max') {
        /* @ts-ignore */
        return getPriceDiscount(parseFloat(b.price), b.discount) - getPriceDiscount(parseFloat(a.price), a.discount)
      }
      if (orderBy === 'min') {
        /* @ts-ignore */
        return getPriceDiscount(parseFloat(a.price), a.discount) - getPriceDiscount(parseFloat(b.price), b.discount)
      }
      /* @ts-ignore */
      return new Date(a.createdDate) - new Date(b.createdDate)
    })

    dispatch(setFilteredProducts(sortedProducts))
  }, [orderBy])
  return <Select options={options} />
}

export default Order
