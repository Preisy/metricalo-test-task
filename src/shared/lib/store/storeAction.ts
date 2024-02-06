import { FirebaseError } from 'firebase/app'
import type { State } from '../store'

export const useStoreAction = async <TData, TResponse>(opts: StoreActionParams<TData, TResponse>) => {
  opts.state.loading()
  try {
    const result = await opts.action
    opts.state.success()
    await opts.onSuccess?.(result)

    return result
  } catch (e) {
    opts.state.error()
    await opts.onError?.(e as FirebaseError)
    if (e instanceof FirebaseError) return e
    return e as FirebaseError
  }
}

export interface StoreActionParams<TData, TResponse = TData> {
  state: State<TData>
  action: Promise<TResponse>
  onSuccess?: (res: TResponse) => Promise<unknown> | unknown
  onError?: (e: FirebaseError) => Promise<unknown> | unknown
}
