import { FC, useState } from 'react'
import classnames from 'classnames'

import { useAppSelector } from '@src/store'
import { Pagination } from '@src/components'
import { paginationOptions } from '@src/constants'
import { getListByPaginated, getSortedProductList } from '@src/lib'
import ProductCard from './ProductCard/ProductCard'
import styles from './ProductList.module.scss'

interface Props {
  className?: string
}

const ProductList: FC<Props> = ({ className, ...rest }) => {
  const { filteredProducts, sortingBy } = useAppSelector((state) => state.filter)
  const [page, setPage] = useState(paginationOptions.START_PAGE)

  const handlePagination = (e: number) => {
    setPage(e)
  }

  return (
    <div data-testid="productList">
      <div className={classnames(styles.productList, className)} {...rest}>
        {getListByPaginated(getSortedProductList(filteredProducts, sortingBy), page, paginationOptions.PAGE_SIZE)?.map(
          (product) => (
            <ProductCard key={product?.productId} product={product} />
          ),
        )}
      </div>
      <div className={styles.pagination}>
        <Pagination
          current={page}
          total={filteredProducts.length}
          pageSize={paginationOptions.PAGE_SIZE}
          onChange={handlePagination}
          hideOnSinglePage={true}
        />
      </div>
    </div>
  )
}

export default ProductList
