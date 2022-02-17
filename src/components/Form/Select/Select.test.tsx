import { render } from '@testing-library/react'

import Select from './Select'

describe('Select', () => {
  it('renders correctly', () => {
    const { container } = render(<Select />)
    expect(container).toMatchSnapshot()
  })
})
