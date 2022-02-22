import { IProduct } from '@src/types'
export default interface IProductList {
  className?: string
  page: number
  products: IProduct[]
}
