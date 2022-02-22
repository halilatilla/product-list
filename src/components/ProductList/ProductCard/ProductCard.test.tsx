import { render } from '@src/testUtils'

import ProductCard from './ProductCard'

jest.mock('next/image', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img width={100} height={100} {...props} />
  },
}))

describe('ProductCard', () => {
  const PROPS = {
    product: {
      productId: '',
      imgUrl: '/',
      title: '',
      brand: '',
      color: '',
      discount: 0,
      price: '',
      createdDate: '',
    },
  }

  it('renders correctly', () => {
    const { container } = render(<ProductCard {...PROPS} />)
    expect(container).toMatchSnapshot()
  })
})
