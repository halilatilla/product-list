import { FC } from 'react'
import classnames from 'classnames'
import Image from 'next/image'

import { useAppDispatch, removeItemFromCart } from '@src/store'
import { ICart } from '@src/types'
import { Button } from '@src/components'
import styles from './CartItem.module.css'

interface Props {
  className?: string
  item: ICart
}

const CartItem: FC<Props> = ({ className, item, ...rest }) => {
  const { productId, imgUrl, title } = item

  const dispatch = useAppDispatch()

  const handleRemoveItemFromCart = () => {
    dispatch(removeItemFromCart(productId))
  }

  return (
    <div className={classnames(styles.cartItem, className)} {...rest}>
      <div className={classnames(styles.cartItemImage, 'flex-center')}>
        <Image src={imgUrl} alt={title} width={40} height={60} />
      </div>
      <div className={styles.cartItemDetail}>
        <div className={styles.cartItemTitle}>{title}</div>
        <Button label="kaldır" appearance="delete" onClick={handleRemoveItemFromCart} />
      </div>
    </div>
  )
}

export default CartItem
