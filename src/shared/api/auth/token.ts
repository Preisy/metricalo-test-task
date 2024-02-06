import { Cookies } from 'quasar';


export class TokenService {
  keys = {
    refresh: 'refresh_token',
  };

  getRefreshToken() {
    return Cookies.get(this.keys.refresh)
  }
  setRefreshToken(refreshToken: string) {
    Cookies.set(this.keys.refresh, refreshToken, { sameSite: 'Strict', path: '/' })
  }
  clearToken() {
    Cookies.remove(this.keys.refresh);
  }
}
