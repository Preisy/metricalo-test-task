<script setup lang="ts">
import type { QImgProps } from 'quasar'

interface SImgProps extends QImgProps {}
defineProps<SImgProps>()

</script>

<template>
  <q-img v-bind="{...$attrs, ...$props}" class="pointer-events-none select-none" />
</template>

<style scoped lang="scss"></style>
