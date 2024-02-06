import type { RouteRecordRaw } from 'vue-router'
import { authRoutes } from './authRoutes'
import { dashboardRoutes } from './dashboardRoutes'

export const routes: RouteRecordRaw[] = [
  ...authRoutes,
  ...dashboardRoutes,
]
