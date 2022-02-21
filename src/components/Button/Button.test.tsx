import { render, screen } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  const PROPS = {
    onClick: jest.fn(),
  }

  it('renders correctly', () => {
    const { container } = render(<Button {...PROPS} />)
    expect(container).toMatchSnapshot()
  })

  it('renders Button', () => {
    render(<Button {...PROPS} />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
})
