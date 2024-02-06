<script setup lang="ts">
import { SInput } from 'shared/ui/form';

defineProps<{
  edit?: boolean
}>()
</script>

<template>
  <s-input name="firstName" label="firstName"/>
  <s-input name="lastName" label="lastName"/>
  <s-input name="phone" label="phone"/>
  <s-input name="email" label="email"/>
  <s-input name="organization" label="organization"/>
  <s-input name="country" label="country"/>
  <s-input v-if="!edit" name="eventName" label="eventName"/>
  <s-input name="date" label="date"/>
  <s-input name="text" label="text"/>
</template>

<style scoped lang="scss">

</style>
