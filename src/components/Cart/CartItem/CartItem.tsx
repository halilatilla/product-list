import { FC, useState } from 'react'
import classnames from 'classnames'
import Image from 'next/image'

import { useAppDispatch, removeItemFromCart } from '@src/store'
import { ICart } from '@src/types'
import { Button, Modal } from '@src/components'
import styles from './CartItem.module.scss'

interface Props {
  className?: string
  item: ICart
}

const header = 'ürünü silmek istediğinize emin misiniz?'
const content =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall...."

const CartItem: FC<Props> = ({ className, item, ...rest }) => {
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
        header={header}
        content={content}
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
