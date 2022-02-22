export default function getSortedByDate(dateOne: string, dateTwo: string): number {
  return new Date(dateOne).valueOf() - new Date(dateTwo).valueOf()
}
