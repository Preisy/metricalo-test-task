import type { FieldOptions, RuleExpression } from 'vee-validate'
import { useField as veeUseField } from 'vee-validate'
import type { MaybeRefOrGetter, MaybeRef } from 'vue'
import { computed } from 'vue'

export function useField<TValue = unknown>(
  path: MaybeRefOrGetter<string>,
  rules?: MaybeRef<RuleExpression<TValue>>,
  opts?: Partial<FieldOptions<TValue>>,
) {
  const { errorMessage: veeErrorMessage, meta, ...rest } = veeUseField(path, rules, {
    ...opts,
  })

  const errorMessage = computed(() => {
    if (meta.touched && !meta.valid) {
      return veeErrorMessage.value
    }
    return undefined
  })

  return {
    errorMessage,
    meta,
    ...rest,
  }
}
