import { FC } from 'react'
import classnames from 'classnames'

import ProductCard from './ProductCard/ProductCard'
import styles from './ProductList.module.scss'

interface Props {
  className?: string
  productList: any[]
}

const ProductList: FC<Props> = ({ className, productList, ...rest }) => {
  return (
    <div className={classnames(styles.productList, className)} {...rest}>
      {productList.map((product, index) => (
        <ProductCard key={product?.productId} product={product} />
      ))}
    </div>
  )
}

export default ProductList
