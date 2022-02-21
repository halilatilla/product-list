import { render } from '@src/test/test-utils'

import Header from './Header'

describe('Header', () => {
  const PROPS = {
    products: [],
  }

  it('renders correctly', () => {
    const { container } = render(<Header {...PROPS} />)
    expect(container).toMatchSnapshot()
  })
})
