import * as yup from 'yup'

export namespace User {
  export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  export const passwordSchema = yup
    .string()
    .min(8, 'Password too short')
    .matches(/\d+/, 'Password no number')
    .matches(/[a-z]+/, 'Password no lowercase')
    .matches(/[A-Z]+/, 'Password no uppercase')
    .test(
      'Password has spaces',
      'Password has spaces',
      value => !/\s+/.test(value ?? ' '),
    )
    .required()

  export const shape = yup.object({
    firstName: yup.string().min(2).max(255).required(),
    lastName: yup.string().min(2).max(255).required(),
    username: yup.string().min(2).max(255).required(),
    work: yup.string().min(2).max(255).required(),
    email: yup.string().email().min(2).max(255).required(),
    organization: yup.string().min(2).max(255).required(),
    phone: yup.string().matches(phoneRegExp, 'phone must be valid phone number').required(),
    country: yup.string().min(2).max(255).required(),
  })

  export type Entity = yup.InferType<typeof shape>
}
