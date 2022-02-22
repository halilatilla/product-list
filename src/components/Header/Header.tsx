import { FC } from 'react'
import classnames from 'classnames'

import { Logo, SearchAndFilter, Cart } from '@src/components'
import IHeader from './Header.types'
import styles from './Header.module.scss'

const Header: FC<IHeader> = ({ className, products, ...rest }) => {
  return (
    <header className={classnames(styles.headerWrapper, className)} {...rest} data-testid="header">
      <div className={classnames(styles.header, 'container')}>
        <Logo />
        <SearchAndFilter products={products} />
        <Cart />
      </div>
    </header>
  )
}

export default Header
