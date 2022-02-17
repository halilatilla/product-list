import { FC } from 'react'
import classnames from 'classnames'

import { Logo, Search } from '@src/components'
import styles from './Header.module.css'

interface Props {
  className?: string
}

const Header: FC<Props> = ({ className, ...rest }) => {
  return (
    <header className={classnames(styles.headerWrapper, className)} {...rest} data-testid="header">
      <div className={classnames(styles.header, 'container')}>
        <Logo />
        <Search placeholder="25 milyon’dan fazla ürün içerisinde ara" />
        <div>basket</div>
      </div>
    </header>
  )
}

export default Header
