import { render, screen, fireEvent } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  const PROPS = {
    onClick: jest.fn(),
    disabled: false,
  }

  it('renders correctly', () => {
    const { container } = render(<Button {...PROPS} />)
    expect(container).toMatchSnapshot()
  })

  it('could not clickable if button disabled ', () => {
    render(<Button {...PROPS} disabled={true} />)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    button.click()
    expect(PROPS.onClick).not.toHaveBeenCalled()
  })
})
