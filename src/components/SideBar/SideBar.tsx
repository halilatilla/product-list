import { FC, useEffect, useState } from 'react'
import classnames from 'classnames'

import { useAppSelector } from '@src/store'
import { getUniqueItemsFromList, getSameItemCountFromList } from '@src/lib'
import { filterInitialItems } from '@src/constants'
import { IFilter, IProduct } from '@src/types'
import SideBarList from './SideBarList/SideBarList'
import styles from './SideBar.module.scss'

interface Props {
  className?: string
  products: IProduct[]
}

const SideBar: FC<Props> = ({ className, products, ...rest }) => {
  const { filteredProducts } = useAppSelector((state) => state.filter)

  const [filterItems, setFilterItems] = useState<IFilter[]>(filterInitialItems)

  useEffect(() => {
    const colors = getUniqueItemsFromList(filteredProducts, 'color')
    const brands = getUniqueItemsFromList(filteredProducts, 'brand')

    const colorCount = getSameItemCountFromList(filteredProducts, 'color')
    const brandCount = getSameItemCountFromList(filteredProducts, 'brand')

    setFilterItems((prevState) => {
      return prevState.map((item) => {
        if (item.value === 'color') {
          return {
            ...item,
            items: colors.map((color) => ({
              label: color,
              value: color,
              count: colorCount[color],
            })),
          }
        } else if (item.value === 'brand') {
          return {
            ...item,
            items: brands.map((brand) => ({
              label: brand,
              value: brand,
              count: brandCount[brand],
            })),
          }
        }
        return item
      })
    })
  }, [filteredProducts])

  return (
    <div className={classnames(styles.sidebar, className)} {...rest}>
      {filterItems.map(({ title, items, value }) => (
        <SideBarList key={title} title={title} productValue={value} items={items} />
      ))}
    </div>
  )
}

export default SideBar
