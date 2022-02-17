import { render } from '@testing-library/react'

import ProductCard from './ProductCard'

describe('ProductCard', () => {
  it('renders correctly', () => {
    const { container } = render(<ProductCard />)
    expect(container).toMatchSnapshot()
  })
})
