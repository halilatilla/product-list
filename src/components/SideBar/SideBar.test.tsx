import { render } from '@src/test/test-utils'

import SideBar from './SideBar'

describe('SideBar', () => {
  const PROPS = {
    products: [],
  }

  it.only('renders correctly', () => {
    const { container } = render(<SideBar {...PROPS} />)
    expect(container).toMatchSnapshot()
  })
})
