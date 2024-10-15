import { currency } from '@/app/store'

const client7 = 'assets/images/client/utb.png'
const client8 = 'assets/images/client/avs.png'
const client9 = 'assets/images/client/vip.png'

const flight1 = 'assets/images/category/flight/yamoussoukro.jpg'
const flight2 = 'assets/images/category/flight/man.jpg'
const flight3 = 'assets/images/category/flight/tiassale.jpg'
const flight4 = 'assets/images/category/flight/korhogo.jpg'
const flight5 = 'assets/images/category/flight/beoumi.jpg'
const flight6 = 'assets/images/category/flight/bouake.jpg'

const blog2 = 'assets/images/blog/02.jpg'
const blog3 = 'assets/images/blog/03.jpg'
const blog4 = 'assets/images/blog/04.jpg'

export type OffersType = {
  logo: string
  offer: string
  flightType: string
  variant: string
  percentageOff?: boolean
  couponCode: string
}

export type DestinationType = {
  name: string
  rating: number
  flightInterval: string
  information?: string
  image: string
}

type BlogType = {
  title: string
  name: string
  image: string
}

const specialOffers: OffersType[] = [
  {
    logo: client7,
    offer:'500 ' + currency,
    flightType: 'Sur votre premier billet Aller-Retour',
    variant: 'bg-success',
    couponCode: '8B99OFF',
  },
  {
    logo: client8,
    offer: '- 5%',
    percentageOff: true,
    flightType: 'Sur votre premier billet',
    variant: 'bg-danger',
    couponCode: '13PO7FF',
  },
  {
    logo: client9,
    offer: '- 10%',
    flightType: 'Sur les billets en destination de Bouaké',
    variant: 'bg-info',
    couponCode: 'LOG165F',
  },
]

const popularDestinations: DestinationType[] = [
  {
    name: 'Yamoussoukro',
    rating: 4.7,
    flightInterval: 'La capitale politique de la Côte d\'Ivoire',
    information: 'Le village natal du président Félix Houphouët-Boigny, Son aménagement extensif se distingue par ses larges avenues, souvent bordées de rangées d\'arbres parfois doubles, de bas-côtés amples et parfois engazonnés et plantés d\'arbustes ornementaux, et par ses nombreux espaces boisés d\'essences variées, véritables « forêts urbaines »',
    image: flight1,
  },
  {
    name: 'Tiassalé',
    rating: 4.5,
    information: 'Tiassalé est une ville de Côte d\'Ivoire située au nord de la capitale économique du pays, Abidjan.',
    flightInterval: 'À 126km d\'abidjan',
    image: flight3,
  },
  {
    name: 'Man',
    rating: 3.9,
    flightInterval: 'La ville aux 18 montagnes',
    information: 'Man est la grande ville de l’ouest de la Côte d’Ivoire. Construite au fond une cuvette entourée d’une chaîne montagneuse, elle porte le doux surnom de « la ville aux 18 montagnes ». A ce titre, elle ne ressemble à aucune autre ville de la Côte d’Ivoire.',
    image: flight2,
  },
  {
    name: 'Korhogo',
    rating: 3.1,
    information: 'Korhogo est la troisième ville la plus peuplée de la Côte d\'Ivoire, et la plus grande ville du nord du pays',
    flightInterval: 'La ville du Poro',
    image: flight4,
  },

  // {
  //   name: 'Switzerland',
  //   rating: 4.3,
  //   flightInterval: 'Filling fast, next available flight on 2nd Oct',
  //   image: flight5,
  // },
  //
  // {
  //   name: 'Switzerland',
  //   rating: 4.3,
  //   flightInterval: 'Filling fast, next available flight on 2nd Oct',
  //   image: flight6,
  // },
]

const blogs: BlogType[] = [
  {
    title: 'Story of water world adventure',
    name: 'Jacqueline Miller',
    image: blog2,
  },
  {
    title: 'How Hotel Technology Can Help Small Hotel Businesses',
    name: 'Frances Guerrero',
    image: blog3,
  },
  {
    title: 'Hotel Service - Become a Guide for Your Guests',
    name: 'Louis Ferguson',
    image: blog4,
  },
]

export { specialOffers, popularDestinations, blogs }
