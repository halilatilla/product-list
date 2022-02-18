import { FC } from 'react'
import classnames from 'classnames'

import { useAppSelector } from '@src/store'
import ProductCard from './ProductCard/ProductCard'
import styles from './ProductList.module.scss'

interface Props {
  className?: string
}

const ProductList: FC<Props> = ({ className, ...rest }) => {
  const { filteredProducts } = useAppSelector((state) => state.filter)
  return (
    <div className={classnames(styles.productList, className)} {...rest}>
      {filteredProducts?.map((product) => (
        <ProductCard key={product?.productId} product={product} />
      ))}
    </div>
  )
}

export default ProductList
