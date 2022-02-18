import { FC, useEffect, useState } from 'react'
import classnames from 'classnames'
import Fuse from 'fuse.js'

import { useAppSelector, useAppDispatch, setFilterBy, setOrderBy, setFilteredProducts } from '@src/store'
import { getUniqueItemsFromList, getSameItemCountFromList } from '@src/lib'
import { filterInitialItems } from '@src/constants'
import { IFilter } from '@src/types'
import { Button } from '@src/components'
import { getPriceDiscount, getSortedListByAZ } from '@src/lib'
import styles from './SideBar.module.scss'

interface Props {
  className?: string
}

const SideBar: FC<Props> = ({ className, ...rest }) => {
  const { filteredProducts, filterBy, orderBy } = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()

  const [initialProducts, setInitialProducts] = useState([])

  const [filterItems, setFilterItems] = useState<IFilter[]>(filterInitialItems)

  const fuse = new Fuse(initialProducts, {
    keys: ['color', 'brand'],
    threshold: 0,
  })

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

  const handleFilteredItem = ({ value, productValue }: { value: string; productValue: string }) => {
    if (productValue === 'order') {
      if (orderBy === value) {
        dispatch(setOrderBy(''))
        return
      }

      dispatch(setOrderBy(value))
      return
    }

    /* @ts-ignore */
    if (filterBy[productValue] === value) {
      dispatch(setFilterBy({ value: '', productValue }))
      return
    }

    dispatch(setFilterBy({ value, productValue }))
  }

  useEffect(() => {
    const initialProducts = localStorage.getItem('products')

    if (initialProducts) {
      setInitialProducts(JSON.parse(initialProducts))
    }
  }, [])

  useEffect(() => {
    if (filterBy.brand === '' && filterBy.color === '') {
      dispatch(setFilteredProducts(initialProducts))
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
      {filterItems.map(({ title, items, value: productValue }) => (
        <div className={styles.filter} key={title}>
          {items.length > 0 && <p className={styles.title}>{title}</p>}
          <ul>
            {getSortedListByAZ(items, 'label').map(({ label, value, count }) => (
              <li key={label}>
                <Button
                  className={classnames(styles.filterItem, {
                    /* @ts-ignore */
                    [styles.active]: filterBy[productValue] === value || orderBy === value,
                  })}
                  label={label}
                  appearance="text"
                  onClick={() => handleFilteredItem({ value, productValue })}
                >
                  {count && <span className={styles.count}>({count})</span>}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default SideBar
