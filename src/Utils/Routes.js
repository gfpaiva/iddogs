import { Home, NotFound, Search } from '../Pages';

export const PublicRoutes = [
  {
    exact: true,
    path: '/',
    component: Home,
    key: 'home',
  },
  {
    exact: true,
    path: '/search',
    component: Search,
    key: 'search',
  },
  {
    component: NotFound,
    key: 'notFound',
  },
];

export const PrivateRoutes = [
  {
    exact: true,
    path: '/',
    component: Home,
    key: 'home',
  },
  {
    exact: true,
    path: '/search',
    component: Search,
    key: 'search',
  },
  {
    component: NotFound,
    key: 'notFound',
  },
];
