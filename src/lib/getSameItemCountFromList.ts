export default function getSameItemCountFromList<T>(list: T[], key: string): { [item: string]: number } {
  return list?.reduce((acc, curr) => {
    if (acc[curr[key]]) {
      acc[curr[key]] += 1
    } else {
      acc[curr[key]] = 1
    }
    return acc
  }, {})
}
