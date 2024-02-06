<script setup lang="ts">
import { computed, ref } from 'vue';
import { ROUTES } from 'shared/config/routes';
import { AppLayout } from 'shared/ui/view';

const tabs = [
  {
    to: ROUTES.DASHBOARD.EVENTS,
    title: 'events',
    name: 0,
  },
]
const currentTab = ref(0)
const currentTitle = computed(() => tabs.find((it) => it.name === currentTab.value)?.title)
</script>

<template>
  <app-layout with-drawer>
    <template #drawer>
      <q-tabs v-model="currentTab" vertical>
        <q-route-tab v-for="tab in tabs" :key="tab.to" :to="{name: tab.to}" :label="tab.title" :name="tab.name" />
      </q-tabs>
    </template>

    <template #header>
      {{ currentTitle }}
    </template>

    <router-view class="px-7 py-5 w-full"/>
  </app-layout>
</template>

<style scoped lang="scss">

</style>
