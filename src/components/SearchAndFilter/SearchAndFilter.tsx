import { FC, useEffect } from 'react'

import { useAppSelector, useAppDispatch, setFilteredProducts } from '@src/store'
import { useFuseSearch } from '@src/hooks'
import { IProduct } from '@src/types'
import { filterByKeys } from '@src/constants'
import { Search } from '@src/components'

interface Props {
  className?: string
  products: IProduct[]
}

const SearchAndFilter: FC<Props> = ({ products }) => {
  const { filterByBrand, filterByColor, searchTerm } = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()
  const { fuse } = useFuseSearch([filterByKeys.COLOR, filterByKeys.BRAND, filterByKeys.TITLE])

  useEffect(() => {
    if (filterByBrand === '' && filterByColor === '') {
      dispatch(setFilteredProducts(products))
      return
    }

    if (filterByBrand !== '' && filterByColor !== '') {
      dispatch(
        setFilteredProducts(
          fuse.search({ $and: [{ brand: filterByBrand }, { color: filterByColor }] }).map((result) => result.item),
        ),
      )
      return
    }

    dispatch(
      setFilteredProducts(
        fuse.search({ $or: [{ brand: filterByBrand }, { color: filterByColor }] }).map((result) => result.item),
      ),
    )
  }, [filterByBrand, filterByColor])

  useEffect(() => {
    if (searchTerm.length > 2) {
      dispatch(setFilteredProducts(fuse.search(searchTerm).map((result) => result.item)))
      return
    }

    if (filterByBrand === '' && filterByColor === '' && searchTerm.length < 2) {
      dispatch(setFilteredProducts(products))
    }
  }, [searchTerm])

  return <Search placeholder="25 milyon’dan fazla ürün içerisinde ara" />
}

export default SearchAndFilter
