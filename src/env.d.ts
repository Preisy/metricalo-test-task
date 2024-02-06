/* eslint-disable */

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: string
    readonly VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined
    readonly VUE_ROUTER_BASE: string | undefined
    readonly ENV_MODE: 'local' | 'development' | 'production'
    readonly API_URL: string
    readonly API_KEY: string
    readonly AUTH_DOMAIN: string
    readonly PROJECT_ID: string
    readonly STORAGE_BUCKET: string
    readonly MESSAGING_SENDER_ID: string
    readonly APP_ID: string
  }
}
