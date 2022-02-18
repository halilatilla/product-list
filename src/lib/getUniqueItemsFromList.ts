export default function getUniqueItemsFromList<T>(list: T[], key: string): string[] {
  return Array.from(new Set(list?.map((item) => item[key])))
}
