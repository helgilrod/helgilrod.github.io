export type Product = {
  number: string
  category: string
  name: string
  description: string
  price: string
  size: string
  detail: string
  tone: 'essence' | 'serum' | 'cream' | 'mist'
}

export const products: Product[] = [
  {
    number: '01',
    category: 'Hydrating Essence',
    name: 'Cloud Essence',
    description: 'Ultra-light hydration with a weightless finish.',
    price: '€38',
    size: '150 ml',
    detail: 'Rice water · Panthenol',
    tone: 'essence',
  },
  {
    number: '02',
    category: 'Brightening Serum',
    name: 'Lumière Serum',
    description: 'Advanced radiance care for naturally luminous skin.',
    price: '€54',
    size: '30 ml',
    detail: 'Niacinamide · Tranexamic acid',
    tone: 'serum',
  },
  {
    number: '03',
    category: 'Barrier Cream',
    name: 'Velvet Cream',
    description: 'A soft, restorative layer for a stronger skin barrier.',
    price: '€46',
    size: '50 ml',
    detail: 'Ceramides · Squalane',
    tone: 'cream',
  },
  {
    number: '04',
    category: 'Hydrating Face Mist',
    name: 'Dewy Mist',
    description: 'Instant hydration for a fresh, dewy finish.',
    price: '€32',
    size: '100 ml',
    detail: 'Mineral water · Aloe vera',
    tone: 'mist',
  },
]
