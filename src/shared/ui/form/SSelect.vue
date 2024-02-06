<script setup lang="ts">
import type { QSelectProps } from 'quasar'
import { useField } from 'shared/lib/form';

interface SSelectProps extends Omit<QSelectProps, 'modelValue'> {
  name: string
  sRequired?: boolean
}
const props = defineProps<SSelectProps>()

const { errorMessage, value } = useField<string | number | undefined>(props.name)
</script>

<template>
  <q-select
    v-bind="{ ...$attrs, ...$props }"
    v-model="value"
    :error="!!errorMessage"
    :error-message="errorMessage"
    class="p-b-8"
    :class="{ 'q-field--required': sRequired }"
    outlined
  />
</template>

<style scoped lang="scss">
.q-field--required:deep(.q-field__label:after) {
  content: ' *';
  color: red;
}
</style>
