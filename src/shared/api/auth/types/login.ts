import type * as yup from 'yup'
import { User } from 'shared/api/user'

export namespace Login {
  export const shape = User.shape.pick(['email']).shape({
    password: User.passwordSchema,
  })
  export type Entity = yup.InferType<typeof shape>
}
