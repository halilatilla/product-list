import { render, screen } from '@testing-library/react'

import Header from './Header'

describe('Header', () => {
  const DATA = {
    className: '',
  }

  it('renders correctly', () => {
    const { container } = render(<Header {...DATA} />)
    expect(container).toMatchSnapshot()
  })

  it('renders Header', () => {
    render(<Header {...DATA} />)

    const header = screen.getByRole('header')

    expect(header).toBeInTheDocument()
  })
})
