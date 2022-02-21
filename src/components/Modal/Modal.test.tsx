import { render } from '@src/test/test-utils'

import Modal from './Modal'

describe('Modal', () => {
  const PROPS = {
    onClose: jest.fn(),
    onConfirm: jest.fn(),
    isVisible: true,
  }

  it('renders correctly', () => {
    const { container } = render(<Modal {...PROPS} />)
    expect(container).toMatchSnapshot()
  })
})
