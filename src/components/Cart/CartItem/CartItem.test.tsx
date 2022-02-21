import { render } from '@src/test/test-utils'

import CartItem from './CartItem'

jest.mock('next/image', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img width={100} height={100} {...props} />
  },
}))

describe('CartItem', () => {
  const PROPS = {
    item: { productId: '', imgUrl: '/', title: '' },
  }

  it('renders correctly', () => {
    const { container } = render(<CartItem {...PROPS} />)
    expect(container).toMatchSnapshot()
  })
})
