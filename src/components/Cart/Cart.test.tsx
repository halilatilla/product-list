import { render, screen } from '@src/test/test-utils'

import Cart from './Cart'

describe('Cart', () => {
  it('renders correctly', () => {
    const { container } = render(<Cart />)
    expect(container).toMatchSnapshot()
  })

  it('renders Cart', () => {
    render(<Cart />)

    const cart = screen.getByTestId('cart')

    expect(cart).toBeInTheDocument()
  })
})
