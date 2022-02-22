import { FC, useState, useEffect } from 'react'
import classnames from 'classnames'
import Image from 'next/image'

import { getPriceDiscount } from '@src/lib'
import { useAppDispatch, addToCart, useAppSelector } from '@src/store'
import { Button } from '@src/components'
import IProductCard from './ProductCard.types'
import styles from './ProductCard.module.scss'

const ProductCard: FC<IProductCard> = ({ className, product, ...rest }) => {
  const { productId, imgUrl, title, brand, color, discount, price } = product

  const [itemIsAlreadyAdded, setItemIsAlreadyAdded] = useState(false)

  const store = useAppSelector((state) => state.cart)

  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({ productId, imgUrl, title }))
  }

  const getItemIsAlreadyAdded = () => {
    const result = store.some((item) => item.productId === productId)
    if (result) {
      setItemIsAlreadyAdded(true)
    } else {
      setItemIsAlreadyAdded(false)
    }
  }

  useEffect(() => {
    getItemIsAlreadyAdded()
  }, [store])

  return (
    <li className={classnames(styles.productCard, className)} {...rest}>
      <div className={classnames(styles.imageWrapper, 'flex-center')}>
        <Image src={imgUrl} alt={title} className={styles.image} width={224} height={332} />
      </div>
      <div className={styles.detail}>
        <p className={styles.title}> {title} </p>
        <div className={styles.info}>
          <p className={styles.brand}>
            <span className={styles.subTitle}>marka:</span> <span>{brand}</span>
          </p>
          <p className={styles.color}>
            <span className={styles.subTitle}>renk:</span>
            <span>{color}</span>
          </p>
          <div className={styles.priceWrapper}>
            <p className={styles.price}> {getPriceDiscount(parseFloat(price), discount)} TL </p>
            <div>
              <span className={styles.discountPrice}>{price}</span>
              <span className={styles.discountPercent}> {discount}% </span>
            </div>
          </div>
        </div>
        {itemIsAlreadyAdded ? (
          <Button
            onClick={handleAddToCart}
            className={styles.addToCart}
            label="bu ürünü sepete ekleyemezsiniz"
            appearance="addToCart"
            disabled
          />
        ) : (
          <Button onClick={handleAddToCart} className={styles.addToCart} label="sepete ekle" appearance="addToCart" />
        )}
      </div>
    </li>
  )
}

export default ProductCard
