import { FC } from 'react'
import classnames from 'classnames'

import styles from './SideBar.module.scss'

interface Props {
  className?: string
}

const SideBar: FC<Props> = ({ className, ...rest }) => {
  return (
    <div className={classnames(styles.sideBar, className)} {...rest}>
      sideBar
    </div>
  )
}

export default SideBar
