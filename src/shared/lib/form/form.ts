import type { FormOptions } from 'vee-validate'
import { useForm as veeUseForm } from 'vee-validate'
import type * as yup from 'yup'

export function useForm<TSchema extends yup.Schema>(
  opts?: Omit<FormOptions<yup.InferType<TSchema>, yup.InferType<TSchema>>, 'validationSchema'> & {
    validationSchema: TSchema
  },
) {
  return veeUseForm<yup.InferType<TSchema>, yup.InferType<TSchema>>(opts)
}
