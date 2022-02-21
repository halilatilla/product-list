import { FC } from 'react'
import classnames from 'classnames'

import { useAppDispatch, useAppSelector, setSortingBy } from '@src/store'

import styles from './Select.module.scss'

interface Props {
  placeholder?: string
  className?: string
  options: any[]
}

const Select: FC<Props> = ({ className, options, ...rest }) => {
  const dispatch = useAppDispatch()
  const { sortingBy } = useAppSelector((state) => state.filter)

  const handleSearchTerm = (value: string) => {
    if (!value) {
      dispatch(setSortingBy(''))
      return
    }
    dispatch(setSortingBy(value))
  }

  return (
    <select
      className={classnames(styles.select, className)}
      onChange={(e) => handleSearchTerm(e.target.value)}
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} selected={option.value === sortingBy}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
