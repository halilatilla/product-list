import { FC } from 'react'
import classnames from 'classnames'

import { Order } from '@src/components'
import { useAppSelector } from '@src/store'
import styles from './SubHeader.module.scss'

interface Props {
  className?: string
}

const SubHeader: FC<Props> = ({ className, ...rest }) => {
  const { searchTerm } = useAppSelector((state) => state.filter)
  return (
    <div className={classnames(styles.subHeader, 'flex-center-between', className)} {...rest}>
      <div>
        <h1 className={styles.title}>cep telefonları </h1>
        {searchTerm && (
          <>
            <span className={styles.searchTerm}> aranan kelime: </span>{' '}
            <span className={styles.searchTermResult}>{searchTerm} </span>
          </>
        )}
      </div>
      <Order />
    </div>
  )
}

export default SubHeader
