import { FC, useEffect, useState } from 'react'
import classnames from 'classnames'

import { useAppSelector, useAppDispatch, setFilterBy, setOrderBy, updateFilterBy } from '@src/store'
import { IFilter } from '@src/types'
import { getUniqueItemsFromList, getSameItemCountFromList } from '@src/lib'
import { Button } from '@src/components'
import { filterInitialItems } from '@src/constants'
import styles from './SideBar.module.scss'

interface Props {
  className?: string
}

const SideBar: FC<Props> = ({ className, ...rest }) => {
  const { filteredProducts, filterBy, orderBy } = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()

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

  const handleFilteredItem = ({ value, productValue }: { value: string; productValue: string }) => {
    if (productValue === 'order') {
      dispatch(setOrderBy(value))
      return
    }

    if (filterBy.includes(value)) {
      const newFilterBy = filterBy.filter((item) => item !== value)
      dispatch(updateFilterBy(newFilterBy))
      return
    }

    dispatch(setFilterBy(value))
  }

  return (
    <div className={classnames(styles.sidebar, className)} {...rest}>
      {filterItems.map(({ title, items, value: productValue }) => (
        <div className={styles.filter} key={title}>
          {items.length > 0 && <p className={styles.title}>{title}</p>}
          <ul>
            {items.map(({ label, value, count }) => (
              <li key={label}>
                <Button
                  className={classnames(styles.filterItem, {
                    [styles.active]: filterBy.includes(value) || orderBy === value,
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
