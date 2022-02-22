import { render } from '@src/testUtils'

import Logo from './SubHeader'

describe('Logo', () => {
  it('renders correctly', () => {
    const { container } = render(<Logo />)
    expect(container).toMatchSnapshot()
  })
})
