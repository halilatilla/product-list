import { FC } from 'react'
import classnames from 'classnames'

import styles from './Button.module.scss'

interface Props {
  label?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
  appearance?: 'delete' | 'confirm' | 'close' | 'addToCart'
}

const Button: FC<Props> = ({ label, onClick, className, children, disabled, type = 'button', appearance, ...rest }) => {
  return (
    <button
      className={classnames(styles.button, 'flex-center', styles?.[appearance!], className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {label} {children}
    </button>
  )
}

export default Button
