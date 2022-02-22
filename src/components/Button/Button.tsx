import { FC } from 'react'
import classnames from 'classnames'

import IButton from './Button.types'
import styles from './Button.module.scss'

const Button: FC<IButton> = ({ label, className, children, type = 'button', appearance, ...rest }) => {
  return (
    <button
      className={classnames(styles.button, 'flex-center', styles?.[appearance!], className)}
      type={type}
      {...rest}
    >
      {label} {children}
    </button>
  )
}

export default Button
