import { FC } from 'react'
import classnames from 'classnames'
import RcPagination from 'rc-pagination'

import IPagination from './Pagination.types'

const Pagination: FC<IPagination> = ({ className, current, total, pageSize, onChange, hideOnSinglePage }) => {
  return (
    <RcPagination
      current={current}
      total={total}
      pageSize={pageSize}
      hideOnSinglePage={hideOnSinglePage}
      onChange={onChange}
      className={classnames('pagination', className)}
    />
  )
}

export default Pagination
