import { render } from '@src/test/test-utils'

import ProductList from './ProductList'

describe('ProductList', () => {
  it('renders correctly', () => {
    const { container } = render(<ProductList />)
    expect(container).toMatchSnapshot()
  })
})
