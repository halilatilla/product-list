import { FC, useEffect, useState } from 'react'
import classnames from 'classnames'

import { useAppSelector, useAppDispatch, setFilteredProducts } from '@src/store'
import { getUniqueItemsFromList, getSameItemCountFromList, getPriceDiscount } from '@src/lib'
import { filterInitialItems } from '@src/constants'
import { useFuseSearch } from '@src/hooks'
import { IFilter, IProduct } from '@src/types'
import SideBarList from './SideBarList/SideBarList'
import styles from './SideBar.module.scss'

interface Props {
  className?: string
  products: IProduct[]
}

const SideBar: FC<Props> = ({ className, products, ...rest }) => {
  const { filteredProducts, filterBy, orderBy, searchTerm } = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()
  const { fuse } = useFuseSearch(['color', 'brand', 'title'])

  const [filterItems, setFilterItems] = useState<IFilter[]>(filterInitialItems)

  useEffect(() => {
    const colors = getUniqueItemsFromList(filteredProducts, 'color')
    const brands = getUniqueItemsFromList(filteredProducts, 'brand')

    const colorCount = getSameItemCountFromList(filteredProducts, 'color')
    const brandCount = getSameItemCountFromList(filteredProducts, 'brand')

    setFilterItems((prevState) => {
      return prevState.map((item) => {
        if (item.value === 'color') {
          return {
            ...item,
            items: colors.map((color) => ({
              label: color,
              value: color,
              count: colorCount[color],
            })),
          }
        } else if (item.value === 'brand') {
          return {
            ...item,
            items: brands.map((brand) => ({
              label: brand,
              value: brand,
              count: brandCount[brand],
            })),
          }
        }
        return item
      })
    })
  }, [filteredProducts])

  useEffect(() => {
    if (filterBy.brand === '' && filterBy.color === '') {
      dispatch(setFilteredProducts(products))
      return
    }

    if (filterBy.brand !== '' && filterBy.color !== '') {
      dispatch(
        setFilteredProducts(
          fuse.search({ $and: [{ brand: filterBy.brand }, { color: filterBy.color }] }).map((result) => result.item),
        ),
      )
      return
    }

    dispatch(
      setFilteredProducts(
        fuse.search({ $or: [{ brand: filterBy.brand }, { color: filterBy.color }] }).map((result) => result.item),
      ),
    )
  }, [filterBy])

  useEffect(() => {
    if (searchTerm.length > 2) {
      dispatch(setFilteredProducts(fuse.search(searchTerm).map((result) => result.item)))
    }
  }, [searchTerm])

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

  return (
    <div className={classnames(styles.sidebar, className)} {...rest}>
      {filterItems.map(({ title, items, value }) => (
        <SideBarList key={title} title={title} productValue={value} items={items} />
      ))}
    </div>
  )
}

export default SideBar
