import { render } from '@src/test/test-utils'

import Pagination from './Pagination'

describe('Pagination', () => {
  const PROPS = {
    className: '',
    current: 1,
    total: 100,
    pageSize: 10,
    onChange: (page: number) => {},
    hideOnSinglePage: true,
  }
  it.only('renders correctly', () => {
    const { container } = render(<Pagination {...PROPS} />)
    expect(container).toMatchSnapshot()
  })
})
