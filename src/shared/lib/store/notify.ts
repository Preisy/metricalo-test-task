import { Notify as QNotify } from 'quasar'

export namespace Notify {
  export function error(message: string) {
    QNotify.create({
      type: 'negative',
      message,
    })
  }

  export function success(message: string) {
    QNotify.create({
      type: 'positive',
      badgeColor: 'positive',
      message,
    })
  }
}
