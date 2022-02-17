import { FC } from 'react'
import classnames from 'classnames'

import { SideBar } from '@src/components'
import styles from './Products.module.scss'

interface Props {
  className?: string
}

const Products: FC<Props> = ({ className, ...rest }) => {
  return (
    <div className={classnames(styles.products, className)} {...rest}>
      <SideBar />
      <div>Product List</div>
    </div>
  )
}

export default Products
