import { FC } from 'react'
import classnames from 'classnames'

import { useAppDispatch, setSearchTerm } from '@src/store'
import { removeWhiteSpace } from '@src/lib'
import ISearch from './Search.types'
import styles from './Search.module.scss'

const Search: FC<ISearch> = ({ className, ...rest }) => {
  const dispatch = useAppDispatch()

  const handleSearchTerm = (value: string) => {
    const removedWhiteSpaceValue = removeWhiteSpace(value)
    dispatch(setSearchTerm(removedWhiteSpaceValue))
  }

  return (
    <input
      type="search"
      className={classnames(styles.search, className)}
      onChange={(e) => handleSearchTerm(e.target.value)}
      {...rest}
    />
  )
}

export default Search
