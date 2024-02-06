<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { WEventsList, WEventsListSelectColumns } from 'widgets/event';
import { useEventListStore, type TableEvent } from 'shared/api/event';
import { ROUTES } from 'shared/config/routes';
import { SBtn } from 'shared/ui/btns';

const columns = ref<(keyof TableEvent.Entity)[]>(['position', 'eventName', 'firstName', 'email', 'date'])

const router = useRouter()
const onClick = () => router.push({ name: ROUTES.EVENT.CREATE });

const store = useEventListStore()
store.fetchList()

</script>

<template>
  <div class="w-full h-full flex flex-nowrap flex-col">
    <div class="flex justify-between items-start">
      <w-events-list-select-columns v-model="columns" class="w-110"/>

      <s-btn @click="onClick" label="Create event"/>
    </div>

    <w-events-list class="flex-1" :columns="columns"/>
  </div>
</template>

<style scoped lang="scss">

</style>
