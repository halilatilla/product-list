import { render } from '@src/testUtils'

import SideBarList from './SideBarList'

describe('SideBarList', () => {
  const PROPS = {
    products: [],
    className: '',
    title: '',
    productValue: '',
    items: [],
  }

  it.only('renders correctly', () => {
    const { container } = render(<SideBarList {...PROPS} />)
    expect(container).toMatchSnapshot()
  })
})
