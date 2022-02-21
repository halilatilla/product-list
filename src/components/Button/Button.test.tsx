import { render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  const PROPS = {
    onClick: jest.fn(),
  }

  it('renders correctly', () => {
    const { container } = render(<Button {...PROPS} />)
    expect(container).toMatchSnapshot()
  })
})
