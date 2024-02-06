const symbol: unique symbol = Symbol()
export type State<T> = (State.Unset<T> | State.Loading<T> | State.Success<T> | State.Error<T>) & { readonly [symbol]: unique symbol }

export function useState<T = unknown>(defaultState?: State.Simple, defaultValue?: T): State<T> {
  return {
    data: defaultValue ?? null,
    state: defaultState,
    loading() {
      this.state = 'loading'
    },
    success() {
      this.state = 'success'
    },
    error() {
      this.state = 'error'
    },
  } as Writable<State<T>>
}


export namespace State {
  export type Simple = 'unset' | 'loading' | 'success' | 'error';

  interface Base<T> {
    data: T | null
    readonly state: State.Simple
    loading(): void
    success(): void
    error(): void
  }

  export interface Unset<T> extends Base<T> {
    data: T | null
    readonly state: 'unset'
  }

  export interface Loading<T> extends Base<T> {
    data: null
    readonly state: 'loading'
  }

  export interface Success<T> extends Base<T> {
    data: T | null
    readonly state: 'success'
  }

  export interface Error<T> extends Base<T> {
    data: null
    readonly state: 'error'
  }
}


export * from './notify'
export * from './storeAction'
