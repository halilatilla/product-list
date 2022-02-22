import { render } from '@src/testUtils'

import Logo from './Logo'

jest.mock('next/image', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img width={100} height={100} {...props} />
  },
}))

describe('Logo', () => {
  it('renders correctly', () => {
    const { container } = render(<Logo />)
    expect(container).toMatchSnapshot()
  })
})
