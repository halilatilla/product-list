import { FC, useState } from 'react'
import classnames from 'classnames'
import Image from 'next/image'

import { useAppDispatch, removeItemFromCart } from '@src/store'
import { modalDummyData } from '@src/constants'
import { Button, Modal } from '@src/components'
import ICartItem from './CartItem.types'
import styles from './CartItem.module.scss'

const CartItem: FC<ICartItem> = ({ className, item, ...rest }) => {
  const { productId, imgUrl, title } = item
  const [isVisible, setIsVisible] = useState(false)

  const dispatch = useAppDispatch()

  const handleRemoveItemFromCart = () => {
    dispatch(removeItemFromCart(productId))
  }

  return (
    <>
      <Modal
        onClose={() => setIsVisible(false)}
        isVisible={isVisible}
        header={modalDummyData.HEADER}
        content={modalDummyData.CONTENT}
        onConfirm={handleRemoveItemFromCart}
      />

      <div className={classnames(styles.cartItem, className)} {...rest} data-testid="cartItem">
        <div className={classnames(styles.cartItemImage, 'flex-center')}>
          <Image src={imgUrl} alt={title} width={40} height={60} />
        </div>
        <div className={styles.cartItemDetail}>
          <div className={styles.cartItemTitle}>{title}</div>
          <Button label="kaldır" appearance="delete" onClick={() => setIsVisible(true)} />
        </div>
      </div>
    </>
  )
}

export default CartItem
