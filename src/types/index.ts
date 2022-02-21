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

export interface IFilterItem {
  value: string
  label: string
  count?: number
}

export interface IFilter {
  title: string
  value: string
  items: IFilterItem[]
}

export interface IFilterBy {
  color: string
  brand: string
  value: string
}
export interface IFilterState {
  filterByBrand: string
  filterByColor: string
  sortingBy: string
  searchTerm: string
  filteredProducts: IProduct[]
}
