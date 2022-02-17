import { FC } from 'react'
import classnames from 'classnames'

import { useAppDispatch, setSelectedItem } from '@src/store'
import { orderOptions } from '@src/constants'

import styles from './Select.module.css'

interface Props {
  placeholder?: string
  className?: string
}

const options = [{ value: '', label: 'sıralama' }, ...orderOptions]

const Select: FC<Props> = ({ className, ...rest }) => {
  const dispatch = useAppDispatch()

  const handleSearchTerm = (value: string) => {
    if (!value) return
    dispatch(setSelectedItem(value))
  }

  return (
    <select
      className={classnames(styles.select, className)}
      onChange={(e) => handleSearchTerm(e.target.value)}
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
