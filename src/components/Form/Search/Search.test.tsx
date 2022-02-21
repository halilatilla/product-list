import { render, screen } from '@src/test/test-utils'

import Search from './Search'

describe('Search', () => {
  it('renders correctly', () => {
    const { container } = render(<Search />)
    expect(container).toMatchSnapshot()
  })

  it('renders Search', () => {
    render(<Search />)

    const input = screen.getByRole('searchbox')

    expect(input).toBeInTheDocument()
  })
})
