import { currency } from '@/app/store'

const vehicle1 = 'assets/images/category/cab/seadan.svg'
const vehicle2 = 'assets/images/category/cab/lux.svg'
const vehicle3 = 'assets/images/category/cab/suv.svg'
const vehicle4 = 'assets/images/category/cab/suv-2.svg'

export type CabListType = {
  id: number
  name: string
  image: string
  keyFeatures: string[]
  rating: number
  sale: string
  price: number
  salePrice: number
  features: string[]
  notes: string[]
}

const cabsLists: CabListType[] = [
  {
    id: 1,
    name: 'Camry, Accord',
    keyFeatures: ['SEDAN', 'AC', '4 Seats'],
    rating: 4.5,
    features: [
      '600Kms included. After that ' + currency + '15/Kms',
      '2 luggage bags ',
      'Diesel Car',
    ],
    notes: [
      'Free Cancellation, till 1 hour of Pick up',
      'Free waiting up to 45 minutes',
    ],
    price: 250,
    sale: '4% Off',
    salePrice: 210,
    image: vehicle1,
  },
  {
    id: 2,
    name: 'Audi, BMW',
    keyFeatures: ['LUX', 'AC', '4 Seats'],
    rating: 4.5,
    features: [
      '600Kms included. After tha ' + currency + '15/Kms',
      '2 luggage bags ',
      'Diesel Car',
    ],
    notes: [
      'Free Cancellation, till 1 hour of Pick up',
      'Free waiting up to 45 minutes',
    ],
    price: 550,
    sale: '2% Off',
    salePrice: 500,
    image: vehicle2,
  },
  {
    id: 3,
    name: 'Ertiga, Xylo',
    keyFeatures: ['SUV', 'AC', '6 Seats'],
    rating: 4.5,
    features: [
      '600Kms included. After that  ' + currency + '15/Kms',
      '2 luggage bags ',
      'Diesel Car',
    ],
    notes: [
      'Free Cancellation, till 1 hour of Pick up',
      'Free waiting up to 45 minutes',
    ],
    price: 400,
    sale: '10% Off',
    salePrice: 350,
    image: vehicle3,
  },
  {
    id: 4,
    name: 'Suv, Innova Crysta',
    keyFeatures: ['SUV', 'AC', '4 Seats'],
    rating: 4.3,
    features: [
      '600Kms included. After that ' + currency + '15/Kms',
      '2 luggage bags ',
      'Diesel Car',
    ],
    notes: [
      'Free Cancellation, till 1 hour of Pick up',
      'Free waiting up to 45 minutes',
    ],
    price: 650,
    sale: '15% Off',
    salePrice: 480,
    image: vehicle4,
  },
]

export { cabsLists }
