import { render } from '@src/test/test-utils'

import Search from './Search'

describe('Search', () => {
  it('renders correctly', () => {
    const { container } = render(<Search />)
    expect(container).toMatchSnapshot()
  })
})
