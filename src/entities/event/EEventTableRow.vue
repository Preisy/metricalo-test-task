<script setup lang="ts">
import { computed } from 'vue';
import type { TableEvent } from 'shared/api/event';

interface EventTableRowProps {
  event: TableEvent.Entity
  columns: (keyof TableEvent.Entity)[]
}
const props = defineProps<EventTableRowProps>();
const columnsArr = computed(() => props.columns.map(it => ({ label: props.event[it], key: it })))

const stringify = (value: TableEvent.Entity[keyof TableEvent.Entity]) => {
  if (value instanceof Date) return value.toLocaleDateString()
  return value
}
</script>

<template>
  <td>
    <q-icon name="drag_handle"/>
  </td>
  <td v-for="column in columnsArr" :key="column.key">
    <span>
      {{ stringify(column.label) }}
    </span>
  </td>
</template>

<style scoped lang="scss">

</style>
