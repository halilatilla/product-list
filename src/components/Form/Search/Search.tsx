import { FC } from 'react'
import classnames from 'classnames'

import styles from './Input.module.css'

interface Props {
  type?: string
  placeholder?: string
  className?: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: FC<Props> = ({ type = 'text', className, ...rest }) => {
  return <input type={type} className={classnames(styles.input, className)} {...rest} />
}

export default Search
