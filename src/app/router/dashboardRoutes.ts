import type { RouteRecordRaw } from 'vue-router';
import { ROUTES } from 'shared/config/routes';

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    name: ROUTES.DASHBOARD.LAYOUT,
    path: '/',
    meta: { auth: true },
    component: () => import('processes/layouts/LDashboard.vue'),
    children: [
      {
        path: '',
        meta: { auth: true },
        name: ROUTES.DASHBOARD.EVENTS,
        component: () => import('pages/event/PEventsList.vue'),
      },
    ],
  },
  {
    path: '/event/create',
    name: ROUTES.EVENT.CREATE,
    meta: { auth: true },
    component: () => import('pages/event/PCreateEvent.vue'),
  },
  {
    path: '/event/:eventName',
    name: ROUTES.EVENT.EDIT,
    props: true,
    meta: { auth: true },
    component: () => import('pages/event/PEditEvent.vue'),
  },
]
