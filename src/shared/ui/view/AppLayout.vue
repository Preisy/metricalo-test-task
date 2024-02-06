<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  withDrawer?: boolean
}>()

const pageStyle = (offset: number) => {
  return { height: offset ? `calc(100vh - ${offset}px)` : '100vh' }
}
const drawerLeft = ref(false)

</script>

<template>
  <q-layout view="hHh lpR fFf" class="mx-auto max-w-[1280px]">
    <q-drawer
      v-if="withDrawer"
      v-model="drawerLeft"
      :width="200"
      :breakpoint="700"
      bordered
      overlay
    >
      <q-scroll-area class="fit">
        <slot name="drawer"/>
      </q-scroll-area>
    </q-drawer>

    <q-header class="flex justify-between items-center pa-4">
      <q-btn v-if="withDrawer" flat @click="drawerLeft = !drawerLeft" round dense icon="menu" class="mr-4" />

      <div class="flex-1 flex justify-between items-center">
        <slot name="header"/>
      </div>
    </q-header>


    <q-page-container>
      <q-page :style-fn="pageStyle">
        <slot/>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">

</style>
