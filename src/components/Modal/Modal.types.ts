export default interface IModal {
  className?: string
  onClose: () => void
  onConfirm: () => void
  isVisible: boolean
  header?: string
  content?: string
}
