import { Navigate } from 'react-router-dom'

import { default as menuRoutes } from './menu-router'

import PageNotFound from '../pages/404'
import Login from '@/pages/login'

const generalRoutes: routeProps[] = [
  {
    path: '/login',
    key: '/login',
    types: 'generalRoute',
    element: <Login />,
  },
  {
    path: '/',
    key: '/',
    types: 'generalRoute',
    element: <Navigate to={menuRoutes[0].path as string} />,
  },
  {
    path: '*',
    key: '*',
    types: 'generalRoute',
    element: <PageNotFound />,
  },
]

export default generalRoutes
