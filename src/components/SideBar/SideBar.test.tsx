import { render } from '@testing-library/react'

import SideBar from './SideBar'

describe('SideBar', () => {
  it('renders correctly', () => {
    const { container } = render(<SideBar />)
    expect(container).toMatchSnapshot()
  })
})
