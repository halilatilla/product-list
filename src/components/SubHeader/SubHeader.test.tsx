import { render } from '@src/test/test-utils'

import Logo from './SubHeader'

describe('Logo', () => {
  it('renders correctly', () => {
    const { container } = render(<Logo />)
    expect(container).toMatchSnapshot()
  })
})
