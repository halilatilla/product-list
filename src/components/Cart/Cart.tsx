import { FC } from 'react'
import classnames from 'classnames'

import { useAppSelector } from '@src/store'
import CartItem from './CartItem/CartItem'
import styles from './Cart.module.scss'

interface Props {
  className?: string
}

const Cart: FC<Props> = ({ className, ...rest }) => {
  const cartItems = useAppSelector((state) => state.cart)

  return (
    <div className={classnames(styles.cart, 'flex-center', className)} {...rest}>
      {cartItems.length > 0 && (
        <div className={classnames(styles.cartItemsCount, 'flex-center')}>{cartItems.length}</div>
      )}

      <p className={styles.cartTitle}>sepetim</p>
      <div className={styles.cartDetail}>
        {cartItems.length > 0 ? (
          <div className={styles.cartItemList}>
            {cartItems.map((item) => (
              <CartItem key={item.productId} item={item} />
            ))}
          </div>
        ) : (
          <div>Sepetinizde ürün bulunmamaktadır.</div>
        )}
      </div>
    </div>
  )
}

export default Cart
