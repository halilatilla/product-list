import { render, screen, fireEvent } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  const PROPS = {
    onClick: jest.fn(),
    disabled: false,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    const { container } = render(<Button {...PROPS} />)
    expect(container).toMatchSnapshot()
  })

  it('button is clickable if disabled false ', () => {
    render(<Button {...PROPS} />)
    const button = screen.getByRole('button')
    expect(button).not.toBeDisabled()
    button.click()
    expect(PROPS.onClick).toHaveBeenCalled()
  })

  it('button is not clickable if disabled true ', () => {
    render(<Button {...PROPS} disabled={true} />)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    button.click()
    expect(PROPS.onClick).not.toHaveBeenCalled()
  })
})
