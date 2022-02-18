export default function getSortedListByAZ<T>(list: T[], key: string): T[] {
  // @ts-ignore
  return list.sort((a, b) => (a[key].toLowerCase() < b[key].toLowerCase() ? -1 : 1))
}
