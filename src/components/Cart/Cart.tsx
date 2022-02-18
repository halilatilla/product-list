import { FC, useEffect } from 'react'
import classnames from 'classnames'

import { useAppSelector, useAppDispatch, updateCartItems } from '@src/store'
import { useLocalStorage } from '@src/hooks'
import CartItem from './CartItem/CartItem'
import styles from './Cart.module.scss'

interface Props {
  className?: string
}

const Cart: FC<Props> = ({ className, ...rest }) => {
  const cartItems = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const [localCartItems, setLocalCartItems] = useLocalStorage('cart', cartItems)

  useEffect(() => {
    if (localCartItems) {
      dispatch(updateCartItems(localCartItems))
    }
  }, [])

  useEffect(() => {
    setLocalCartItems(cartItems)
  }, [cartItems])

  return (
    <div className={classnames(styles.cart, 'flex-center', className)} {...rest}>
      {localCartItems.length > 0 && (
        <div className={classnames(styles.cartItemsCount, 'flex-center')}>{localCartItems.length}</div>
      )}

      <p className={styles.cartTitle}>sepetim</p>
      <div className={styles.cartDetail}>
        {localCartItems.length > 0 ? (
          <div className={styles.cartItemList}>
            {localCartItems.map((item) => (
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
