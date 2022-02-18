import { FC } from 'react'
import classnames from 'classnames'

import { orderOptions } from '@src/constants'
import { Button } from '@src/components'
import styles from './SideBar.module.scss'

interface Props {
  className?: string
}

const filterItems = [
  {
    title: 'renk',
    items: [
      { value: 'kahverengi', label: 'Kahverengi' },
      { value: 'mavi', label: 'Mavi' },
      { value: 'sari', label: 'Sari' },
      { value: 'siyah', label: 'Siyah' },
    ],
  },
  {
    title: 'sıralama',
    items: [...orderOptions],
  },
  {
    title: 'marka',
    items: [
      { value: 'apple', label: 'apple' },
      { value: 'samsung', label: 'samsung' },
      { value: 'huawei', label: 'huawei' },
    ],
  },
]

const SideBar: FC<Props> = ({ className, ...rest }) => {
  return (
    <div className={classnames(styles.sidebar, className)} {...rest}>
      {filterItems.map(({ title, items }) => (
        <div className={styles.filter} key={title}>
          <p className={styles.title}>{title}</p>
          <ul>
            {items.map(({ label }) => (
              <li key={label}>
                <Button className={styles.filterItem} label={label} appearance="text" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default SideBar
