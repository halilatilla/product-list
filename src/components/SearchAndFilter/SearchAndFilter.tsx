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
  const { filterBy, searchTerm } = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()
  const { fuse } = useFuseSearch([filterByKeys.COLOR, filterByKeys.BRAND, filterByKeys.TITLE])

  useEffect(() => {
    if (filterBy.brand === '' && filterBy.color === '') {
      dispatch(setFilteredProducts(products))
      return
    }

    if (filterBy.brand !== '' && filterBy.color !== '') {
      dispatch(
        setFilteredProducts(
          fuse.search({ $and: [{ brand: filterBy.brand }, { color: filterBy.color }] }).map((result) => result.item),
        ),
      )
      return
    }

    dispatch(
      setFilteredProducts(
        fuse.search({ $or: [{ brand: filterBy.brand }, { color: filterBy.color }] }).map((result) => result.item),
      ),
    )
  }, [filterBy])

  useEffect(() => {
    if (searchTerm.length > 2) {
      dispatch(setFilteredProducts(fuse.search(searchTerm).map((result) => result.item)))
      return
    }

    if (filterBy.brand === '' && filterBy.color === '' && searchTerm.length < 2) {
      dispatch(setFilteredProducts(products))
    }
  }, [searchTerm])

  return <Search placeholder="25 milyon’dan fazla ürün içerisinde ara" />
}

export default SearchAndFilter
