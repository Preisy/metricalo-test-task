<script setup lang="ts">
import type { QCheckboxProps } from 'quasar'

interface SCheckBoxProps extends QCheckboxProps {}
defineProps<SCheckBoxProps>()
defineEmits<{
  (e: 'update:modelValue', val: unknown): void
}>()
</script>

<template>
  <q-checkbox
    v-bind="{ ...$attrs, ...$props }"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :label="label"
    class="m-b-8 block text-sm c-tertiary font-normal"
  >
    <slot />
  </q-checkbox>
</template>

<style scoped lang="scss"></style>
