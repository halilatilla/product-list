import { FC } from 'react'
import classnames from 'classnames'

import { Logo } from '@src/components'

import styles from './Header.module.css'

interface Props {
  className?: string
}

const Header: FC<Props> = ({ className, ...rest }) => {
  return (
    <header className={classnames(styles.headerWrapper, className)} {...rest}>
      <div className={classnames(styles.header, 'container flex-center-between')}>
        <Logo />
        <div>search</div>
        <div>basket</div>
      </div>
    </header>
  )
}

export default Header
