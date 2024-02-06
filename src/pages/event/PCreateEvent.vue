<script setup lang="ts">
import { WCreateEvent } from 'widgets/event';
import { AppLayout } from 'shared/ui/view';

</script>

<template>
  <app-layout>
    <template #header>
      Create Event
    </template>

    <div class="pa-5 h-full">
      <w-create-event/>
    </div>
  </app-layout>
</template>

<style scoped lang="scss">

</style>
