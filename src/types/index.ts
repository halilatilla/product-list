export interface IProduct {
  productId: string
  title: string
  brand: string
  createdDate: Date
  color: string
  price: string
  discount: number
  imgUrl: string
}
export interface ICart {
  productId: string
  imgUrl: string
  title: string
}
