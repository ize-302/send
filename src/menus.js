import { Home, Quotes, Book, Ship, Wallet, Card, Tag, Rate, User, Folder, Bell, Gear, Headphone } from './Components/Icon'

export const firstMenuSet = [
  {
    name: 'Dashboard',
    path: '/',
    icon: Home
  },
  {
    name: 'Quotes',
    path: '/quotes',
    icon: Quotes
  },
  {
    name: 'Bookings',
    path: '/bookings',
    icon: Book
  },
  {
    name: 'Shipments',
    path: '/shipments',
    icon: Ship
  },
  {
    name: 'Trade Finance',
    path: '/trade-finance',
    icon: Wallet
  }
]

export const secondMenuSet = [
  {
    name: 'Billings',
    path: '/billings',
    icon: Card
  },
  {
    name: 'Products',
    path: '/products',
    icon: Tag
  },
  {
    name: 'Fixed Rates',
    path: '/fixed-rates',
    icon: Rate
  },
  {
    name: 'Network',
    path: '/network',
    icon: User
  },
  {
    name: 'Reports',
    path: '/reports',
    icon: Folder
  }
]

export const thirdMenuSet = [
  {
    name: 'Notifications',
    path: '/notifications',
    icon: Bell
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: Gear
  },
  {
    name: 'Support',
    path: '/support',
    icon: Headphone
  },
]