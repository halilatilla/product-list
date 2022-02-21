import { render } from '@src/test/test-utils'

import Cart from './Cart'

describe('Cart', () => {
  it('renders correctly', () => {
    const { container } = render(<Cart />)
    expect(container).toMatchSnapshot()
  })
})
