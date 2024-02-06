<script setup lang="ts">
import { QInput } from 'quasar'
import type { QInputProps } from 'quasar'
import { useField } from 'shared/lib/form';

interface SInputProps extends Omit<QInputProps, 'modelValue'> {
  name: string
}
const props = defineProps<SInputProps>()

const { errorMessage, value } = useField<string | number | undefined>(props.name)
</script>

<template>
  <q-input
    v-bind="{ ...$attrs, ...$props }"
    v-model="value"
    :error="!!errorMessage"
    :error-message="errorMessage"
    outlined
    class="s-input text-md [&_.q-field\_\_bottom]:pt-3px"
  />
</template>

<style scoped lang="scss"></style>
