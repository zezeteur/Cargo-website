const room1 = 'assets/images/category/hotel/4by3/01.jpg'
const room2 = 'assets/images/category/hotel/4by3/02.jpg'
const room3 = 'assets/images/category/hotel/4by3/03.jpg'
const room4 = 'assets/images/category/hotel/4by3/04.jpg'

type RoomDetailType = {
  name: string
  image: string
  bedType: string
  roomFloor: string
  date: string
  link?: string
}

const roomDetailList: RoomDetailType[] = [
  {
    name: 'Deluxe Pool View with Breakfast',
    bedType: 'King size',
    roomFloor: 'Ground floor: G5',
    date: '22 Nov 2022',
    image: room1,
  },
  {
    name: 'Premium Room With Balcony',
    bedType: 'Single Bed',
    roomFloor: 'First Floor: F3',
    date: '20 Nov 2022',
    image: room2,
  },
  {
    name: 'Deluxe Pool View',
    bedType: 'Family Bed',
    roomFloor: 'Ground Floor: G3',
    date: '16 Nov 2022',
    image: room3,
  },
  {
    name: 'Superior Room',
    bedType: 'King Bed',
    roomFloor: 'First Floor: F5',
    date: '14 Nov 2022',
    image: room4,
  },
]

export { roomDetailList }
