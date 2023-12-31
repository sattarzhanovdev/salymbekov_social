import home from '../icons/home.svg'
import recomendation from '../icons/recomendation.svg'
import publish from '../icons/publish.svg'
import search from '../icons/search.svg'

import homeActive from '../icons/home active.svg'
import recomendationActive from '../icons/recomendation active.svg'
import publishActive from '../icons/publish active.svg'
import searchActive from '../icons/search active.svg'
import { Pages } from '../pages'


export const NavList = [
  {
    id: 1,
    route: '/',
    icon: home,
    activeIcon: homeActive
  },
  // {
  //   id: 2,
  //   route: '/recomendation/',
  //   icon: recomendation,
  //   activeIcon: recomendationActive
  // },
  {
    id: 2,
    route: '/publish/',
    icon: publish,
    activeIcon: publishActive
  },
  // {
  //   id: 4,
  //   route: '/search/',
  //   icon: search,
  //   activeIcon: searchActive
  // },
]

export const PUBLIC_ROUTES = [
  {
    id: 1, 
    route: '/',
    page: <Pages.Main />
  },
  {
    id: 2,
    route: '/login/',
    page: <Pages.Login />
  },
  {
    id: 3, 
    route: '/publish/',
    page: <Pages.Publish />
  },
  {
    id: 4, 
    route: '/profile/',
    page: <Pages.Profile />
  }
]