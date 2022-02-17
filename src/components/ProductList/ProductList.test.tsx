import { render } from '@testing-library/react'

import ProductList from './ProductList'

describe('ProductList', () => {
  it('renders correctly', () => {
    const { container } = render(<ProductList />)
    expect(container).toMatchSnapshot()
  })
})
