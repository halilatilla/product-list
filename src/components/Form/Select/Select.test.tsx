import { render } from '@src/test/test-utils'

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
})
