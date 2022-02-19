export default function getSortedListByAZ<T>(list: T[], key: string): T[] {
  return list.sort((a, b) => ((a as any)[key].toLowerCase() < (b as any)[key].toLowerCase() ? -1 : 1))
}
