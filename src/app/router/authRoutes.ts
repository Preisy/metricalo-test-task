import type { RouteRecordRaw } from 'vue-router';
import { ROUTES } from 'shared/config/routes';

export const authRoutes: RouteRecordRaw[] = [
  {
    name: ROUTES.AUTH.LAYOUT,
    path: '/auth',
    component: () => import('processes/layouts/LAuth.vue'),
    children: [
      {
        path: '',
        name: ROUTES.AUTH.LOGIN,
        component: () => import('pages/PLogin.vue'),
      },
      {
        path: 'signup',
        name: ROUTES.AUTH.SIGNUP,
        component: () => import('pages/PSignup.vue'),
      },
    ],
  },
]
