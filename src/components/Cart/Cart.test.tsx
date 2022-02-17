import { render } from '@testing-library/react'

import Cart from './Cart'

describe('Cart', () => {
  it('renders correctly', () => {
    const { container } = render(<Cart />)
    expect(container).toMatchSnapshot()
  })
})
