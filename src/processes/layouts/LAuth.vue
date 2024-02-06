<script setup lang="ts">
import { computed, ref } from 'vue';
import { ROUTES } from 'shared/config/routes';
import { AppLayout } from 'shared/ui/view';

const tabs = [
  {
    to: ROUTES.AUTH.LOGIN,
    title: 'Login',
    name: 0,
  },
  {
    to: ROUTES.AUTH.SIGNUP,
    title: 'Signup',
    name: 1,
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

    <q-scroll-area class="h-full w-full">
      <div class="flex items-center justify-center">
        <router-view class="max-w-300px w-90% pt-5"/>
      </div>
    </q-scroll-area>

  </app-layout>
</template>

<style scoped lang="scss">

</style>
