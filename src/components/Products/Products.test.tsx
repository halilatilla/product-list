import { render } from '@testing-library/react'

import Products from './Products'

describe('Products', () => {
  it('renders correctly', () => {
    const { container } = render(<Products />)
    expect(container).toMatchSnapshot()
  })
})
