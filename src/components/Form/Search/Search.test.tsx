import { render, screen } from '@testing-library/react'

import Search from './Search'

describe('Search', () => {
  const DATA = {
    onChange: () => {},
    value: '',
  }

  it('renders correctly', () => {
    const { container } = render(<Search {...DATA} />)
    expect(container).toMatchSnapshot()
  })

  it('renders Search', () => {
    render(<Search {...DATA} />)

    const search = screen.getByRole('textbox')

    expect(search).toBeInTheDocument()
  })
})
