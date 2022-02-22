import { render } from '@src/testUtils'

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
