import { FC } from 'react'
import classnames from 'classnames'
import RcPagination from 'rc-pagination'

import styles from './Pagination.module.scss'

interface Props {
  className?: string
  current?: number
  total?: number
  pageSize?: number
  onChange?: (page: number) => void
  hideOnSinglePage?: boolean
}

const Pagination: FC<Props> = ({ className, current, total, pageSize, onChange, hideOnSinglePage }) => {
  return (
    <RcPagination
      current={current}
      total={total}
      pageSize={pageSize}
      hideOnSinglePage={hideOnSinglePage}
      onChange={onChange}
      className={classnames(styles.pagination, 'pagination', className)}
    />
  )
}

export default Pagination
