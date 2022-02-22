import { render, screen, within } from '@src/testUtils'

import ProductListWithPagination from './ProductListWithPagination'

describe('ProductListWithPagination', () => {
  it('renders correctly', () => {
    const { container } = render(<ProductListWithPagination />)
    expect(container).toMatchSnapshot()
  })
})
