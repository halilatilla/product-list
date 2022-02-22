import { FC } from 'react'
import classnames from 'classnames'

import { useAppSelector } from '@src/store'
import { paginationOptions } from '@src/constants'
import { getListByPaginated, getSortedProductList } from '@src/lib'
import ProductCard from './ProductCard/ProductCard'
import IProductList from './ProductList.types'
import styles from './ProductList.module.scss'

const ProductList: FC<IProductList> = ({ className, products, page, ...rest }) => {
  const { filteredProducts, sortingBy } = useAppSelector((state) => state.filter)

  return (
    <ul aria-label="product-list" className={classnames(styles.productList, className)} {...rest}>
      {getListByPaginated(getSortedProductList(filteredProducts, sortingBy), page, paginationOptions.PAGE_SIZE)?.map(
        (product) => (
          <ProductCard key={product?.productId} product={product} />
        ),
      )}
    </ul>
  )
}

export default ProductList
