import { FC } from 'react'
import classnames from 'classnames'

import { useAppSelector, useAppDispatch, setFilterByColor, setFilterByBrand, setOrderBy } from '@src/store'
import { getSortedListByAZ } from '@src/lib'
import { filterOptions } from '@src/constants'
import { Button } from '@src/components'
import { IFilterItem } from '@src/types'
import styles from './SideBarList.module.scss'

interface Props {
  className?: string
  title: string
  productValue: string
  items: IFilterItem[]
}

const SideBarList: FC<Props> = ({ className, items, title, productValue, ...rest }) => {
  const { filterByColor, filterByBrand, orderBy } = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()

  const handleFilteredItem = ({ value, productValue }: { value: string; productValue: string }) => {
    if (productValue === filterOptions.ORDER) {
      if (orderBy === value) {
        dispatch(setOrderBy(''))
        return
      }

      dispatch(setOrderBy(value))
      return
    }

    if (productValue === filterOptions.COLOR) {
      if (filterByColor === value) {
        dispatch(setFilterByColor(''))
        return
      }

      dispatch(setFilterByColor(value))
      return
    }

    if (filterByBrand === value) {
      dispatch(setFilterByBrand(''))
      return
    }

    dispatch(setFilterByBrand(value))
  }

  return (
    <div className={styles.filter} {...rest}>
      {items.length > 0 && <p className={styles.title}>{title}</p>}
      <ul>
        {getSortedListByAZ(items, 'label').map(({ label, value, count }) => (
          <li key={label}>
            <Button
              className={classnames(styles.item, {
                [styles.active]: orderBy === value || filterByColor === value || filterByBrand === value,
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
  )
}

export default SideBarList
