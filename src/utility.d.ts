declare type Nullable<T> = T | null
declare type Nillable<T> = T | null | undefined
declare type Optional<T> = T | undefined

declare type Writable<T> = { -readonly [P in keyof T]: T[P] }
