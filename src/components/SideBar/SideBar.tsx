import { FC, useEffect, useState } from 'react'
import classnames from 'classnames'

import { useAppSelector } from '@src/store'
import { getUniqueItemsFromList, getSameItemCountFromList } from '@src/lib'
import { filterInitialItems, filterOptions } from '@src/constants'
import { IFilter, IProduct } from '@src/types'
import SideBarList from './SideBarList/SideBarList'
import ISideBar from './SideBar.types'
import styles from './SideBar.module.scss'

const SideBar: FC<ISideBar> = ({ className, products, ...rest }) => {
  const { filteredProducts } = useAppSelector((state) => state.filter)

  const [filterItems, setFilterItems] = useState<IFilter[]>(filterInitialItems)

  useEffect(() => {
    const colors = getUniqueItemsFromList(filteredProducts, filterOptions.COLOR)
    const brands = getUniqueItemsFromList(filteredProducts, filterOptions.BRAND)

    const colorCount = getSameItemCountFromList(filteredProducts, filterOptions.COLOR)
    const brandCount = getSameItemCountFromList(filteredProducts, filterOptions.BRAND)

    setFilterItems((prevState) => {
      return prevState.map((item) => {
        if (item.value === filterOptions.COLOR) {
          return {
            ...item,
            items: colors.map((color) => ({
              label: color,
              value: color,
              count: colorCount[color],
            })),
          }
        } else if (item.value === filterOptions.BRAND) {
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
