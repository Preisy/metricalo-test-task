import * as yup from 'yup'
import { User } from '../../user'

export namespace Signup {
  export const shape = User.shape.shape({
    password: User.passwordSchema,
    passwordRepeat: yup.string().required().oneOf([yup.ref('password')], 'passwords must match'),
  })
  export type Entity = yup.InferType<typeof shape>
}
