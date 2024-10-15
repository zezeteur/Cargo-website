export type PopularFilterType = {
  id?: string
  label?: string
  count?: number
  name?: string
  image?: string
}

export const popularFilters: PopularFilterType[] = [
  {
    id: 'popolarType1',
    label: 'Refundable Fare',
    count: 41,
  },
  {
    id: 'popolarType2',
    label: '1 Stop',
    count: 20,
  },
  {
    id: 'popolarType3',
    label: 'Late Departure',
    count: 4,
  },
  {
    id: 'popolarType4',
    label: 'Non-Stop',
    count: 2,
  },
]

export const onwordSteps: PopularFilterType[] = [
  {
    id: 'btn-check-c1',
    label: 'Direct',
  },
  {
    id: 'btn-check-c2',
    label: '1 Arrêt',
  },
  {
    id: 'btn-check-c3',
    label: '+1 Arrêt',
  },
]

export const returnSteps: PopularFilterType[] = [
  {
    id: 'btn-check-6',
    label: 'Direct',
  },
  {
    id: 'btn-check-7',
    label: '1 Stop',
  },
  {
    id: 'btn-check-8',
    label: '2+ Stops',
  },
]

export const airline: PopularFilterType[] = [
  {
    id: 'airlineType1',
    name: 'AVS',
    image: 'assets/images/element/avs.png',
  },
  {
    id: 'airlineType2',
    name: 'CTE',
    image: 'assets/images/element/cte.png',
  },
  {
    id: 'airlineType3',
    name: 'Narre Transports',
    image: 'assets/images/element/narre.png',
  },
  {
    id: 'airlineType4',
    name: 'UTB',
    image: 'assets/images/element/utb.png',
  },
  {
    id: 'airlineType7',
    name: 'VIP Transport',
    image: 'assets/images/element/vip.png',
  },
  // {
  //   id: 'airlineType8',
  //   name: 'Realty',
  //   image: 'assets/images/element/13.svg',
  // },
  // {
  //   id: 'airlineType9',
  //   name: 'rocyon',
  //   image: 'assets/images/element/12.svg',
  // },
]

export const layoverAirports: PopularFilterType[] = [
  {
    id: 'lauoverType1',
    name: 'Abu Dhabi',
    count: 1,
  },
  {
    id: 'lauoverType2',
    name: 'Amsterdam',
    count: 2,
  },
  {
    id: 'lauoverType3',
    name: 'Chicago',
    count: 2,
  },
  {
    id: 'lauoverType4',
    name: 'Doha',
    count: 3,
  },
  {
    id: 'lauoverType7',
    name: 'Dubai',
    count: 4,
  },
  {
    id: 'lauoverType8',
    name: 'New Delhi',
    count: 15,
  },
  {
    id: 'lauoverType9',
    name: 'Paris',
    count: 4,
  },
]
