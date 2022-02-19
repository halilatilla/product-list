export default function getSameItemCountFromList<T>(list: T[], key: string): { [item: string]: number } {
  return list?.reduce((acc, curr) => {
    if ((acc as any)[(curr as any)[key]]) {
      ;(acc as any)[(curr as any)[key]] += 1
    } else {
      ;(acc as any)[(curr as any)[key]] = 1
    }
    return acc
  }, {})
}
