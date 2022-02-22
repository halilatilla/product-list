import { render, screen, within } from '@src/testUtils'
import { mockProducts } from '@src/__mocks__/mockProduct'

import ProductList from './ProductList'

describe('ProductList', () => {
  it('renders correctly', () => {
    const { container } = render(<ProductList page={1} products={mockProducts} />)
    expect(container).toMatchSnapshot()
  })
})
