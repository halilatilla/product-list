export const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWg8AAc8BJpg2zxQAAAAASUVORK5CYII=' as const

export const ORDER_OPTIONS = [
  { value: 'min', label: 'en düşük fiyat' },
  { value: 'max', label: 'en yüksek fiyat' },
  { value: 'az', label: 'en yeniler (A-Z)' },
  { value: 'za', label: 'en yeniler (Z-A)' },
] as const

export const ORDER_OPTIONS_SELECT = [{ value: '', label: 'sıralama' }, ...ORDER_OPTIONS]

export const sortingOptions = {
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

export const paginationOptions = {
  PAGE_SIZE: 12,
  START_PAGE: 1,
}

export const modalDummyData = {
  HEADER: 'ürünü silmek istediğinize emin misiniz?' as const,
  CONTENT:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall...." as const,
}
