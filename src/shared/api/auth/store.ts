import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { Notify, useState, useStoreAction } from 'shared/lib/store'
import { AuthService } from './service'
import { TokenService } from './token'
import type { Login, Signup } from './types'

export const useAuthStore = defineStore('auth', () => {
  const authService = new AuthService()
  const tokenService = new TokenService()

  const isAuth = reactive(useState<boolean>('unset', !!tokenService.getRefreshToken()))
  const logoutState = reactive(useState('unset'))

  const login = (req: Login.Entity) => useStoreAction({
    state: isAuth,
    action: authService.login(req),
    onSuccess: (res) => {
      tokenService.setRefreshToken(res.user.refreshToken)
      isAuth.data = true
    },
    onError: (e) => Notify.error(e.message),
  })

  const signup = (req: Signup.Entity) => useStoreAction({
    state: isAuth,
    action: authService.signup(req),
    onError: (e) => Notify.error(e.message),
  })

  const logout = () => useStoreAction({
    state: logoutState,
    action: authService.logout(),
    onSuccess: () => {
      tokenService.clearToken()
      isAuth.data = false
    },
  })

  return {
    login,
    signup,
    isAuth,
    logout,
    logoutState,
  }
})
