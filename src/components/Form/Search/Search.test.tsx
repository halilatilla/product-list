import { render } from '@testing-library/react'

import Search from './Search'

describe('Search', () => {
  it('renders correctly', () => {
    const { container } = render(<Search />)
    expect(container).toMatchSnapshot()
  })
})
