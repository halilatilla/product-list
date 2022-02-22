import { render, screen } from '@src/testUtils'

import ProductList from './ProductList'

describe('ProductList', () => {
  it('renders correctly', () => {
    const { container } = render(<ProductList />)
    expect(container).toMatchSnapshot()
  })

  it('renders ProductList', () => {
    render(<ProductList />)

    const productList = screen.getByTestId('productList')

    expect(productList).toBeInTheDocument()
  })
})
