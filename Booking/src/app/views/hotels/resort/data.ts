const img1 = 'assets/images/category/hotel/resort/3by4/01.jpg'
const img2 = 'assets/images/category/hotel/resort/3by4/02.jpg'
const img3 = 'assets/images/category/hotel/resort/3by4/03.jpg'
const img4 = 'assets/images/category/hotel/resort/3by4/04.jpg'
const img5 = 'assets/images/category/hotel/resort/3by4/05.jpg'
const img6 = 'assets/images/category/hotel/resort/3by4/06.jpg'
const img7 = 'assets/images/category/hotel/resort/3by4/07.jpg'

const resort1 = 'assets/images/category/hotel/resort/01.jpg'
const resort2 = 'assets/images/category/hotel/resort/02.jpg'
const resort3 = 'assets/images/category/hotel/resort/03.jpg'

const offer1 = 'assets/images/offer/02.jpg'
const offer3 = 'assets/images/offer/03.jpg'
const offer7 = 'assets/images/offer/07.jpg'
const offer4 = 'assets/images/offer/04.jpg'
const offer6 = 'assets/images/offer/06.jpg'

const avatar9 = 'assets/images/avatar/09.jpg'
const avatar5 = 'assets/images/avatar/05.jpg'

type TestimonialType = {
  title: string
  description: string
  image: string
}

type RoomSlideType = {
  name: string
  description: string
  sqfoot: string
  sqm: string
  image: string
  feature: string[]
}

type MonthlyOfferType = {
  title: string
  image: string
}

type TestimonialReviewType = {
  name: string
  avatar: string
  description: string
}

const testimonialData: TestimonialType[] = [
  {
    title: 'Spa & Wellness',
    description:
      'We focus a great deal on the understanding of behavioral psychology and influence',
    image: img1,
  },
  {
    title: 'Wedding & Romance',
    description:
      "Understand that theory alone isn't going to get the job done.",
    image: img2,
  },
  {
    title: 'Activities',
    description:
      'Tolerably behavior may admit daughters offending effect wishes change way and any wanted.',
    image: img3,
  },
  {
    title: 'Event Calendar',
    description:
      'Praise effect wishes change way and any wanted behavioral psychology and influence',
    image: img4,
  },
  {
    title: 'Dining',
    description:
      'Focus a great deal on the understanding of behavioral psychology and influence',
    image: img5,
  },
  {
    title: 'Fitness Center',
    description: 'Praise effect wishes change way and any wanted.',
    image: img6,
  },
  {
    title: 'Shop',
    description:
      'Do he it part more last in. We understand that theory is constant',
    image: img7,
  },
]

const roomSlides: RoomSlideType[] = [
  {
    name: 'One Bedroom Ocean Suit',
    description:
      'Lively use looked latter regard had. We understand that theory is constant to build a solid foundation',
    sqfoot: '847-900',
    sqm: '79-84',
    image: resort1,
    feature: ['Ocean View', 'Living Roof', 'Outdoor Soaking Tub'],
  },
  {
    name: 'The Entertainment Suite',
    description:
      'Lively use looked latter regard had. We understand that theory is constant to build a solid foundation',
    sqfoot: '847-900',
    sqm: '79-84',
    image: resort3,
    feature: ['Ocean View', 'Living Roof', 'Private Deck'],
  },
  {
    name: 'The Penthouse Suite',
    description:
      'Lively use looked latter regard had. We understand that theory is constant to build a solid foundation',
    sqfoot: '789-850',
    sqm: '78-85',
    image: resort2,
    feature: ['Indoor Tub', 'Private Deck', 'Freestanding'],
  },
]

const monthlyOffers: MonthlyOfferType[] = [
  {
    title: 'Pass Holder Package',
    image: offer1,
  },
  {
    title: 'More Sun, More Fun',
    image: offer3,
  },
  {
    title: 'A Stay That Gives Back',
    image: offer7,
  },
  {
    title: 'Elevate Your Stay',
    image: offer4,
  },
  {
    title: 'Spa Package Offer',
    image: offer6,
  },
]

const testimonialReviewSlides: TestimonialReviewType[] = [
  {
    name: 'Lori Stevens',
    avatar: avatar9,
    description:
      'Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed in laughing',
  },
  {
    name: 'Carolyn Ortiz',
    avatar: avatar5,
    description:
      'Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous an uncommonly do.',
  },
]

export { testimonialData, roomSlides, monthlyOffers, testimonialReviewSlides }
