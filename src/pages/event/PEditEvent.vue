<script setup lang="ts">
import { WEditEvent } from 'widgets/event';
import { AppLayout } from 'shared/ui/view';

defineProps<{
  eventName: string
}>()

</script>

<template>
  <app-layout>
    <template #header>
      Edit Event {{ eventName }}
    </template>

    <div class="pa-5 h-full">
      <w-edit-event :event-name="eventName"/>
    </div>
  </app-layout>
</template>

<style scoped lang="scss">

</style>
