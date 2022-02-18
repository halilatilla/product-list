import { FC } from 'react'
import classnames from 'classnames'

import { useAppDispatch, useAppSelector, setOrderBy } from '@src/store'
import { orderOptions } from '@src/constants'

import styles from './Select.module.scss'

interface Props {
  placeholder?: string
  className?: string
}

const options = [{ value: '', label: 'sıralama' }, ...orderOptions]

const Select: FC<Props> = ({ className, ...rest }) => {
  const dispatch = useAppDispatch()
  const { orderBy } = useAppSelector((state) => state.filter)

  const handleSearchTerm = (value: string) => {
    if (!value) {
      dispatch(setOrderBy(''))
      return
    }
    dispatch(setOrderBy(value))
  }

  return (
    <select
      className={classnames(styles.select, className)}
      onChange={(e) => handleSearchTerm(e.target.value)}
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} selected={option.value === orderBy}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
