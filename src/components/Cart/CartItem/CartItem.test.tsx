import { render } from '@testing-library/react'

import CartItem from './CartItem'

describe('CartItem', () => {
  it('renders correctly', () => {
    const { container } = render(<CartItem />)
    expect(container).toMatchSnapshot()
  })
})
