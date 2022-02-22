import { render } from '@src/testUtils'

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
