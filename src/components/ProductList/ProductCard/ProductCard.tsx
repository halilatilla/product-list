import { FC } from 'react'
import classnames from 'classnames'

import styles from './ProductCard.module.scss'

interface Props {
  className?: string
  product: any
}

const ProductCard: FC<Props> = ({ className, product, ...rest }) => {
  return (
    <div className={classnames(styles.productCard, className)} {...rest}>
      Product card
    </div>
  )
}

export default ProductCard
