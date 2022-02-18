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

export interface IFilterItems {
  value: string
  label: string
  count?: number
}

export interface IFilter {
  title: string
  value: string
  items: IFilterItems[]
}

export interface IFilterBy {
  color: string
  brand: string
}
export interface IFilterState {
  filterBy: IFilterBy
  orderBy?: string
  filteredProducts: IProduct[]
}
