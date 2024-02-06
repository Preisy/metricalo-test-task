<script setup lang="ts">
import { useField } from 'shared/lib/form';

interface SRadioGroupProps {
  name: string
  label: string
  sRequired?: boolean
  vals: string[]
}
const props = defineProps<SRadioGroupProps>()

const { value } = useField<string>(props.name)
</script>

<template>
  <div p-b-8 c-tertiary >
    <span mb-4 text-base font-normal  :class="{ 's-required': sRequired }">{{ label }}</span>

    <q-radio
      v-for="(val, i) in vals"
      :key="i"
      v-model="value"
      :val="val"
      :label="val"
      class="[&_.q-radio\_\_label]:(text-sm font-medium)"
    />
  </div>
</template>

<style scoped lang="scss"></style>
