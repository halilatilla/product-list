export default interface IPagination {
  className?: string
  current?: number
  total?: number
  pageSize?: number
  onChange?: (page: number) => void
  hideOnSinglePage?: boolean
}
