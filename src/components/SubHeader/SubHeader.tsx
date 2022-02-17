import { FC } from 'react'
import classnames from 'classnames'

import { Select } from '@src/components'
import styles from './SubHeader.module.scss'

interface Props {
  className?: string
}

const SubHeader: FC<Props> = ({ className, ...rest }) => {
  return (
    <div className={classnames(styles.subHeader, 'flex-center-between', className)} {...rest}>
      <div>
        <h1>iPhone iOS cep telefonu</h1>
        <span className={styles.searchTerm}> aranan kelime: </span>{' '}
        <span className={styles.searchTermResult}>iPhone 11</span>
      </div>
      <Select />
    </div>
  )
}

export default SubHeader
