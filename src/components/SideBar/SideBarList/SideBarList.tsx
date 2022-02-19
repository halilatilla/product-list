import { FC } from 'react'
import classnames from 'classnames'

import { useAppSelector, useAppDispatch, setFilterBy, setOrderBy } from '@src/store'
import { getSortedListByAZ } from '@src/lib'
import { Button } from '@src/components'
import styles from './SideBarList.module.scss'

interface Props {
  className?: string
  items: any[]
  title: string
  productValue: string
}

const SideBarList: FC<Props> = ({ className, items, title, productValue, ...rest }) => {
  const { filterBy, orderBy } = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()

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

  return (
    <div className={styles.filter} {...rest}>
      {items.length > 0 && <p className={styles.title}>{title}</p>}
      <ul>
        {getSortedListByAZ(items, 'label').map(({ label, value, count }) => (
          <li key={label}>
            <Button
              className={classnames(styles.item, {
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
  )
}

export default SideBarList
