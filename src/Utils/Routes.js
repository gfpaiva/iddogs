import {
  Home,
  NotFound,
  SignUp,
  Feed,
} from '../Pages';

export const PublicRoutes = [
  {
    exact: true,
    path: '/',
    component: Home,
    key: 'home',
  },
  {
    exact: true,
    path: '/signup',
    component: SignUp,
    key: 'signup',
  },
  {
    exact: true,
    component: NotFound,
    key: 'notfound',
  },
];

export const PrivateRoutes = [
  {
    exact: true,
    path: '/feed/:category/:id?',
    component: Feed,
    key: 'feed',
  },
];
