export const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWg8AAc8BJpg2zxQAAAAASUVORK5CYII=' as const

export const ORDER_OPTIONS = [
  { value: 'min', label: 'en düşük fiyat' },
  { value: 'max', label: 'en yüksek fiyat' },
  { value: 'az', label: 'en yeniler (A-Z)' },
  { value: 'za', label: 'en yeniler (Z-A)' },
] as const

export const ORDER_OPTIONS_SELECT = [{ value: '', label: 'sıralama' }, ...ORDER_OPTIONS]

export const orderByKeys = {
  MIN: 'min',
  MAX: 'max',
  AZ: 'az',
  ZA: 'za',
} as const

export const filterByKeys = {
  COLOR: 'color' as const,
  BRAND: 'brand' as const,
  TITLE: 'title' as const,
}

export const filterOptions = {
  COLOR: 'color' as const,
  BRAND: 'brand' as const,
  ORDER: 'order' as const,
}

export const filterInitialItems = [
  {
    title: 'renk',
    value: 'color',
    items: [],
  },
  {
    title: 'sıralama',
    value: 'order',
    items: [...ORDER_OPTIONS],
  },
  {
    title: 'marka',
    value: 'brand',
    items: [],
  },
]
