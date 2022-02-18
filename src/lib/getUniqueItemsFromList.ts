export default function getUniqueItemsFromList<T>(list: T[], key: string): string[] {
  // @ts-ignore
  return Array.from(new Set(list?.map((item) => item[key])))
}
