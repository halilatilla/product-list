import { render, screen } from '@src/testUtils'

import Select from './Select'

describe('Select', () => {
  const PROPS = {
    options: [
      {
        value: 'a',
        label: '',
      },
      {
        value: 'b',
        label: '',
      },
    ],
  }

  it('renders correctly', () => {
    const { container } = render(<Select {...PROPS} />)
    expect(container).toMatchSnapshot()
  })

  it('renders Select', () => {
    render(<Select {...PROPS} />)

    const input = screen.getByRole('combobox')

    expect(input).toBeInTheDocument()
  })
})
