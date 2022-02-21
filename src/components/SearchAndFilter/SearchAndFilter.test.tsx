import { render } from '@src/test/test-utils'

import SearchAndFilter from './SearchAndFilter'

describe('SearchAndFilter', () => {
  const PROPS = {
    products: [],
  }

  it.only('renders correctly', () => {
    const { container } = render(<SearchAndFilter {...PROPS} />)
    expect(container).toMatchSnapshot()
  })
})
