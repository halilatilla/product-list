import { FC } from 'react'
import classnames from 'classnames'

import { IProduct } from '@src/types'
import ProductCard from './ProductCard/ProductCard'
import styles from './ProductList.module.scss'

interface Props {
  className?: string
  products: IProduct[]
}

const ProductList: FC<Props> = ({ className, products, ...rest }) => {
  return (
    <div className={classnames(styles.productList, className)} {...rest}>
      {products.map((product) => (
        <ProductCard key={product?.productId} product={product} />
      ))}
    </div>
  )
}

export default ProductList
