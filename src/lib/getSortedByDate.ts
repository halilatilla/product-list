export default function getSortedByDate(dateOne: Date, dateTwo: Date): number {
  return new Date(dateOne).valueOf() - new Date(dateTwo).valueOf()
}
