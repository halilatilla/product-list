import { FC } from 'react'
import classnames from 'classnames'
import Image from 'next/image'

import { Button } from '@src/components'
import styles from './CartItem.module.css'

interface Props {
  className?: string
}

const Cart: FC<Props> = ({ className, ...rest }) => {
  return (
    <div className={classnames(styles.cartItem, className)} {...rest}>
      <div className={classnames(styles.cartItemImage, 'flex-center')}>
        <Image src="/assets/product-images/image-1.png" alt="logo" width={40} height={60} />
      </div>
      <div className={styles.cartItemDetail}>
        <div className={styles.cartItemTitle}> iPhone 11 Kırmızı Kılıflı Garantili Telefon</div>
        <Button label="kaldır" appearance="delete" />
      </div>
    </div>
  )
}

export default Cart
