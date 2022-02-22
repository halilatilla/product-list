import { FC, useState } from 'react'

import { useAppSelector } from '@src/store'
import { Pagination, ProductList } from '@src/components'
import { paginationOptions } from '@src/constants'
import IProductListWithPagination from './ProductListWithPagination.types'
import styles from './ProductListWithPagination.module.scss'

const ProductListWithPagination: FC<IProductListWithPagination> = () => {
  const { filteredProducts } = useAppSelector((state) => state.filter)
  const [page, setPage] = useState(paginationOptions.START_PAGE)

  const handlePagination = (e: number) => {
    setPage(e)
  }

  return (
    <div>
      <ProductList page={page} products={filteredProducts} />
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

export default ProductListWithPagination
