<script setup lang="ts">
import type { QBtnProps } from 'quasar'

interface SInputProps extends QBtnProps {}
defineProps<SInputProps>()
</script>

<template>
  <q-btn
    v-bind="{ ...$attrs, ...$props }"
    no-caps
    unelevated
    padding="8px 16px 8px"
    class="bg-tertiary/7 w-fit c-tertiary b-rd-3 [&_.q-btn\\_\\_content>span]:lt-sm:text-5.3"
  />
</template>

<style scoped lang="scss"></style>
