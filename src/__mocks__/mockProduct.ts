import { IProduct } from '@src/types'

export const mockProducts: IProduct[] = [
  {
    productId: '41f8d6c4-3073-439b-af9f-d8a56e1647d3',
    title: 'Apple iPhone 11',
    brand: 'apple',
    createdDate: '2021-07-09T15:06:20.077Z',
    color: 'yellow',
    price: '225,27',
    discount: 78,
    imgUrl: '/assets/product-images/image-1.png',
  },
  {
    productId: 'e41df3bc-6667-4506-9ec6-71bea3e45997',
    title: 'Apple iPhone 11 Pro',
    brand: 'apple',
    createdDate: '2022-01-22T02:10:54.856Z',
    color: 'indigo',
    price: '35,51',
    discount: 30,
    imgUrl: '/assets/product-images/image-2.png',
  },
]

export const mockProduct: IProduct = {
  productId: '41f8d6c4-3073-439b-af9f-d8a56e1647d3',
  title: 'Apple iPhone 11',
  brand: 'apple',
  createdDate: '2021-07-09T15:06:20.077Z',
  color: 'yellow',
  price: '225,27',
  discount: 78,
  imgUrl: '/assets/product-images/image-1.png',
}
