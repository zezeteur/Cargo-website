import type { MenuItemType } from 'src/app/core/models'

export const bookingHomeMenuItems: MenuItemType[] = [
  {
    key: 'hotel-home',
    label: 'Hotel',
    url: '/hotels/home',
    icon: 'fa-solid fa-hotel',
  },
  {
    key: 'flight-home',
    label: 'Flight',
    url: '/flights/home',
    icon: 'fa-solid fa-plane',
  },
  {
    key: 'tour-home',
    label: 'Tour',
    url: '/tours/home',
    icon: 'fa-solid fa-earth-americas',
  },
  {
    key: 'cabs-home',
    label: 'Cab',
    url: '/cabs/home',
    icon: 'fa-solid fa-car',
  },
]

export const USER_PROFILE_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'acc-user-profile',
    label: 'My Profile',
    url: '/user/profile',
    parentKey: 'acc-user',
    icon: 'bi bi-person',
  },
  {
    key: 'acc-user-bookings',
    label: 'My Bookings',
    url: '/user/bookings',
    parentKey: 'acc-user',
    icon: 'bi bi-ticket-perforated',
  },
  {
    key: 'acc-user-travelers',
    label: 'Travelers',
    url: '/user/travelers',
    parentKey: 'acc-user',
    icon: 'bi bi-people',
  },
  {
    key: 'acc-user-payment-details',
    label: 'Payment Details',
    url: '/user/payment-details',
    parentKey: 'acc-user',
    icon: 'bi bi-wallet',
  },
  {
    key: 'acc-user-wishlist',
    label: 'Wishlist',
    url: '/user/wishlist',
    parentKey: 'acc-user',
    icon: 'bi bi-heart',
  },
  {
    key: 'acc-user-settings',
    label: 'Settings',
    url: '/user/settings',
    parentKey: 'acc-user',
    icon: 'bi bi-gear',
  },
  {
    key: 'acc-user-delete',
    label: 'Delete Profile',
    url: '/user/delete-profile',
    parentKey: 'acc-user',
    icon: 'bi bi-trash',
  },
]

export const AGENT_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'acc--dashboard',
    label: 'Dashboard',
    url: '/agent/dashboard',
    parentKey: 'acc-agent',
    icon: 'bi bi-house-door',
  },
  {
    key: 'acc-agent-listings',
    label: 'Listings',
    url: '/agent/listings',
    parentKey: 'acc-agent',
    icon: 'bi bi-journals',
  },
  {
    key: 'acc-agent-bookings',
    label: 'Bookings',
    url: '/agent/bookings',
    parentKey: 'acc-agent',
    icon: 'bi bi-bookmark-heart',
  },
  {
    key: 'acc-agent-activities',
    label: 'Activities',
    url: '/agent/activities',
    parentKey: 'acc-agent',
    icon: 'bi bi-bell',
  },
  {
    key: 'acc-agent-earnings',
    label: 'Earnings',
    url: '/agent/earnings',
    parentKey: 'acc-agent',
    icon: 'bi bi-graph-up-arrow',
  },
  {
    key: 'acc-agent-reviews',
    label: 'Reviews',
    url: '/agent/reviews',
    parentKey: 'acc-agent',
    icon: 'bi bi-star',
  },
  {
    key: 'acc-agent-settings',
    label: 'Settings',
    url: '/agent/settings',
    parentKey: 'acc-agent',
    icon: 'bi bi-gear',
  },
]

export const ADMIN_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    url: '/admin/dashboard',
  },
  {
    key: 'pages-title',
    label: 'Pages',
    isSection: true,
  },
  {
    key: 'bookings',
    label: 'Bookings',
    children: [
      {
        key: 'bookings-list',
        label: 'Booking List',
        url: '/admin/bookings/list',
        parentKey: 'bookings',
      },
      {
        key: 'bookings-detail',
        label: 'Booking Detail',
        url: '/admin/bookings/detail',
        parentKey: 'bookings',
      },
    ],
  },
  {
    key: 'guests',
    label: 'Guests',
    children: [
      {
        key: 'guests-list',
        label: 'Guest List',
        url: '/admin/guests/list',
        parentKey: 'guests',
      },
      {
        key: 'guests-detail',
        label: 'Guest Detail',
        url: '/admin/guests/detail',
        parentKey: 'guests',
      },
    ],
  },
  {
    key: 'agents',
    label: 'Agents',
    children: [
      {
        key: 'agents-list',
        label: 'Agent List',
        url: '/admin/agents/list',
        parentKey: 'agents',
      },
      {
        key: 'agents-detail',
        label: 'Agent Detail',
        url: '/admin/agents/detail',
        parentKey: 'agents',
      },
    ],
  },
  {
    key: 'reviews',
    label: 'Reviews',
    url: '/admin/reviews',
  },
  {
    key: 'earnings',
    label: 'Earnings',
    url: '/admin/earnings',
  },
  {
    key: 'admin-settings',
    label: 'Admin Settings',
    url: '/admin/settings',
  },
  {
    key: 'admin-auth',
    label: 'Authentication',
    children: [
      {
        key: 'auth-sign-up',
        label: 'Sign Up',
        url: '/auth/sign-up',
        parentKey: 'admin-auth',
      },
      {
        key: 'auth-sign-in',
        label: 'Sign in',
        url: '/auth/sign-in',
        parentKey: 'admin-auth',
      },
      {
        key: 'auth-forgot-password',
        label: 'Forgot Password',
        url: '/auth/forgot-password',
        parentKey: 'admin-auth',
      },
      {
        key: 'auth-two-factor-authentication',
        label: 'Two Factor Authentication',
        url: '/auth/two-factor-auth',
        parentKey: 'admin-auth',
      },
      {
        key: 'auth-not-found',
        label: 'Error 404',
        url: '/not-found',
        target: '_blank',
        parentKey: 'admin-auth',
      },
    ],
  },
]

export const HELP_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'help-center',
    label: 'Help Center',
    isTitle: true,
    children: [
      {
        key: 'helps-center-page',
        label: 'Help Center',
        url: '/help/center',
        parentKey: 'help-center',
      },
      {
        key: 'helps-detail-page',
        label: 'Help Detail',
        url: '/help/detail',
        parentKey: 'help-center',
      },
    ],
  },
  {
    key: 'helps-privacy-policy',
    label: 'Privacy Policy',
    url: '/help/privacy-policy',
    isTitle: true,
  },
  {
    key: 'helps-service',
    label: 'Terms of Service',
    url: '/help/service',
    isTitle: true,
  },
]

export const APP_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'listings',
    label: 'Listings',
    isTitle: true,
    children: [
      {
        key: 'hotels',
        label: 'Hotel',
        parentKey: 'listings',
        children: [
          {
            key: 'hotel-home',
            label: 'Hotel Home',
            url: '/hotels/home',
            parentKey: 'hotels',
          },
          {
            key: 'hotel-chain',
            label: 'Hotel Chain',
            url: '/hotels/chain',
            parentKey: 'hotels',
          },
          {
            key: 'hotel-resort',
            label: 'Hotel Resort',
            url: '/hotels/resort',
            parentKey: 'hotels',
          },
          {
            key: 'hotel-grid',
            label: 'Hotel Grid',
            url: '/hotels/grid',
            parentKey: 'hotels',
          },
          {
            key: 'hotel-list',
            label: 'Hotel List',
            url: '/hotels/list',
            parentKey: 'hotels',
          },
          {
            key: 'hotel-detail',
            label: 'Hotel Detail',
            url: '/hotels/detail',
            parentKey: 'hotels',
          },
          {
            key: 'hotel-room-detail',
            label: 'Room Detail',
            url: '/hotels/room-detail',
            parentKey: 'hotels',
          },
          {
            key: 'hotel-booking',
            label: 'Hotel Booking',
            url: '/hotels/booking',
            parentKey: 'hotels',
          },
        ],
      },
      {
        key: 'flights',
        label: 'Flight',
        parentKey: 'listings',
        children: [
          {
            key: 'flight-home',
            label: 'Flight Home',
            url: '/flights/home',
            parentKey: 'flights',
          },
          {
            key: 'flight-list',
            label: 'Flight List',
            url: '/flights/list',
            parentKey: 'flights',
          },
          {
            key: 'flight-detail',
            label: 'Flight Detail',
            url: '/flights/detail',
            parentKey: 'flights',
          },
          {
            key: 'flight-booking',
            label: 'Flight Booking',
            url: '/flights/booking',
            parentKey: 'flights',
          },
        ],
      },
      {
        key: 'tours',
        label: 'Tour',
        parentKey: 'listings',
        children: [
          {
            key: 'tour-home',
            label: 'Tour Home',
            url: '/tours/home',
            parentKey: 'tours',
          },
          {
            key: 'tour-grid',
            label: 'Tour Grid',
            url: '/tours/grid',
            parentKey: 'tours',
          },
          {
            key: 'tour-detail',
            label: 'Tour Detail',
            url: '/tours/detail',
            parentKey: 'tours',
          },
          {
            key: 'tour-booking',
            label: 'Tour Booking',
            url: '/tours/booking',
            parentKey: 'tours',
          },
        ],
      },
      {
        key: 'cabs',
        label: 'Cab',
        parentKey: 'listings',
        children: [
          {
            key: 'cabs-home',
            label: 'Cab Home',
            url: '/cabs/home',
            parentKey: 'cabs',
          },
          {
            key: 'cabs-list',
            label: 'Cab List',
            url: '/cabs/list',
            parentKey: 'cabs',
          },
          {
            key: 'cabs-detail',
            label: 'Cab Detail',
            url: '/cabs/detail',
            parentKey: 'cabs',
          },
          {
            key: 'cabs-booking',
            label: 'Cab Booking',
            url: '/cabs/booking',
            parentKey: 'cabs',
          },
        ],
      },
      {
        key: 'directories',
        label: 'Directory',
        parentKey: 'listings',
        children: [
          {
            key: 'directory-home',
            label: 'Directory Home',
            url: '/directories/home',
            parentKey: 'directories',
          },
          {
            key: 'directory-detail',
            label: 'Directory Detail',
            url: '/directories/detail',
            parentKey: 'directories',
          },
        ],
      },
      {
        key: 'add-listing',
        label: 'Add Listing',
        parentKey: 'listings',
        children: [
          {
            key: 'add-listing-join-us',
            label: 'Join Us',
            url: '/listings/join-us',
            parentKey: 'add-listing',
          },
          {
            key: 'add-listing-listing',
            label: 'Add Listing',
            url: '/listings/add',
            parentKey: 'add-listing',
          },
          {
            key: 'add-listing-listing-minimal',
            label: 'Add Listing Minimal',
            url: '/listings/add-minimal',
            parentKey: 'add-listing',
          },
          {
            key: 'add-listing-listing-added',
            label: 'Listing Added',
            url: '/listings/added',
            parentKey: 'add-listing',
          },
        ],
      },
      {
        key: 'heros',
        label: 'Hero',
        parentKey: 'listings',
        children: [
          {
            key: 'heros-inline-form',
            label: 'Hero Inline Form',
            url: '/heroes/inline-form',
            parentKey: 'heros',
          },
          {
            key: 'heros-multiple-search',
            label: 'Hero Multiple Search',
            url: '/heroes/multiple-search',
            parentKey: 'heros',
          },
          {
            key: 'heros-image-gallery',
            label: 'Hero Image Gallery',
            url: '/heroes/image-gallery',
            parentKey: 'heros',
          },
          {
            key: 'heros-split',
            label: 'Hero Split',
            url: '/heroes/split',
            parentKey: 'heros',
          },
        ],
      },
      {
        key: 'booking-confirmed',
        label: 'Booking Confirmed',
        url: '/booking-confirmed',
        parentKey: 'listings',
      },
      {
        key: 'compare-listing',
        label: 'Compare Listing',
        url: '/compare-listing',
        parentKey: 'listings',
      },
      {
        key: 'offer-detail',
        label: 'Offer Detail',
        url: '/offer-detail',
        parentKey: 'listings',
      },
    ],
  },
  {
    key: 'pages',
    label: 'Pages',
    isTitle: true,
    children: [
      {
        key: 'pages-about',
        label: 'About',
        url: '/pages/about',
        parentKey: 'pages',
      },
      {
        key: 'pages-contact',
        label: 'Contact',
        url: '/pages/contact',
        parentKey: 'pages',
      },
      {
        key: 'pages-contact-2',
        label: 'Contact 2',
        url: '/pages/contact-2',
        parentKey: 'pages',
      },
      {
        key: 'pages-our-team',
        label: 'Our Team',
        url: '/pages/our-team',
        parentKey: 'pages',
      },
      {
        key: 'authentication',
        label: 'Authentication',
        parentKey: 'pages',
        children: [
          {
            key: 'authentication-sign-in',
            label: 'Sign In',
            url: '/auth/sign-in',
            parentKey: 'authentication',
          },
          {
            key: 'authentication-sign-up',
            label: 'Sign Up',
            url: '/auth/sign-up',
            parentKey: 'authentication',
          },
          {
            key: 'authentication-forgot-password',
            label: 'Forgot Password',
            url: '/auth/forgot-password',
            parentKey: 'authentication',
          },
          {
            key: 'authentication-two',
            label: 'Two Factor Authentication',
            url: '/auth/two-factor-auth',
            parentKey: 'authentication',
          },
        ],
      },
      {
        key: 'blogs',
        label: 'Blog',
        parentKey: 'pages',
        children: [
          {
            key: 'blogs-blog',
            label: 'Blog',
            url: '/blogs/blog',
            parentKey: 'blogs',
          },
          {
            key: 'blogs-detail',
            label: 'Blog Detail',
            url: '/blogs/detail',
            parentKey: 'blogs',
          },
        ],
      },
      {
        key: 'helps',
        label: 'Help',
        parentKey: 'pages',
        children: [
          {
            key: 'helps-center',
            label: 'Help Center',
            url: '/help/center',
            parentKey: 'helps',
          },
          {
            key: 'helps-detail',
            label: 'Help Detail',
            url: '/help/detail',
            parentKey: 'helps',
          },
          {
            key: 'helps-privacy-policy',
            label: 'Privacy Policy',
            url: '/help/privacy-policy',
            parentKey: 'helps',
          },
          {
            key: 'helps-services',
            label: 'Terms Of Service',
            url: '/help/service',
            parentKey: 'helps',
          },
        ],
      },
      {
        key: 'pricing',
        label: 'Pricing',
        url: '/pricing',
        parentKey: 'pages',
      },
      {
        key: 'faqs',
        label: 'FAQs',
        url: '/faqs',
        parentKey: 'pages',
      },
      {
        key: 'not-found',
        label: 'Error 404',
        url: '/not-found',
        target: '_blank',
        parentKey: 'pages',
      },
      {
        key: 'coming-soon',
        label: 'Coming Soon',
        url: '/coming-soon',
        target: '_blank',
        parentKey: 'pages',
      },
    ],
  },
  {
    key: 'accounts',
    label: 'Accounts',
    isTitle: true,
    children: [
      {
        key: 'acc-user',
        label: 'User Profile',
        parentKey: 'accounts',
        children: USER_PROFILE_MENU_ITEMS,
      },
      {
        key: 'acc-agent',
        label: 'Agent Dashboard',
        parentKey: 'accounts',
        children: AGENT_MENU_ITEMS,
      },
      {
        key: 'acc-admin',
        label: 'Master Admin',
        parentKey: 'accounts',
        url: '/admin/dashboard',
      },
    ],
  },
]
