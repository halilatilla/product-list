import { sortingOptions } from '@src/constants'
import { IProduct } from '@src/types'
import { getSortedByDate, getSortedPriceByDiscount } from '@src/lib'

export default function getSortedProductList(list: IProduct[], key: string): IProduct[] {
  const sortedProducts = Array.from(list)?.sort((a, b) => {
    if (key === sortingOptions.ZA) {
      return getSortedByDate(b.createdDate, a.createdDate)
    }
    if (key === sortingOptions.MAX) {
      return getSortedPriceByDiscount(
        { price: a.price, discount: a.discount },
        { price: b.price, discount: b.discount },
      )
    }
    if (key === sortingOptions.MIN) {
      return getSortedPriceByDiscount(
        { price: b.price, discount: b.discount },
        { price: a.price, discount: a.discount },
      )
    }
    return getSortedByDate(a.createdDate, b.createdDate)
  })

  return sortedProducts
}
