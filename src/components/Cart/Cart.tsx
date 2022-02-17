import { FC } from 'react'
import classnames from 'classnames'

import CartItem from './CartItem/CartItem'
import styles from './Cart.module.css'

interface Props {
  className?: string
}

const Cart: FC<Props> = ({ className, ...rest }) => {
  return (
    <div className={classnames(styles.cart, 'flex-center', className)} {...rest}>
      <div className={classnames(styles.cartItemsCount, 'flex-center')}>4</div>
      <p className={styles.cartTitle}>basket</p>
      <div className={styles.cartDetail}>
        <div className={styles.cartItemList}>
          <CartItem />
          <CartItem />
        </div>
      </div>
    </div>
  )
}

export default Cart
