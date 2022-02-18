export default function getSameItemCountFromList<T>(list: T[], key: string): { [item: string]: number } {
  return list?.reduce((acc, curr) => {
    // @ts-ignore
    if (acc[curr[key]]) {
      // @ts-ignore
      acc[curr[key]] += 1
    } else {
      // @ts-ignore
      acc[curr[key]] = 1
    }
    return acc
  }, {})
}
