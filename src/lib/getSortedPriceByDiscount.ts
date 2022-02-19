import getPriceDiscount from './getPriceDiscount'

export default function getSortedPriceByDiscount(
  a: { price: string; discount: number },
  b: { price: string; discount: number },
): number {
  return (
    Number(getPriceDiscount(parseFloat(b.price), b.discount)) -
    Number(getPriceDiscount(parseFloat(a.price), a.discount))
  )
}
