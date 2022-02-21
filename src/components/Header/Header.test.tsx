import { render, screen } from '@src/test/test-utils'

import Header from './Header'

describe('Header', () => {
  const PROPS = {
    products: [],
  }

  it('renders correctly', () => {
    const { container } = render(<Header {...PROPS} />)
    expect(container).toMatchSnapshot()
  })

  it('renders Select', () => {
    render(<Header {...PROPS} />)

    const header = screen.getByRole('banner')

    expect(header).toBeInTheDocument()
  })
})
