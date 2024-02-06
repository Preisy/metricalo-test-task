<script setup lang="ts">
import { storeToRefs } from 'pinia';
import type { QTableProps } from 'quasar';
import { QTable } from 'quasar';
import Sortable from 'sortablejs';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useEventListStore, type TableEvent } from 'shared/api/event';
import EventCellActions from './EventCellActions.vue'


const props = defineProps<{
  columns: (keyof TableEvent.Entity)[]
}>()

const eventStore = useEventListStore();
const { changePage, reorder } = useEventListStore()
const { list, listOpts, totalPages, reorderState } = storeToRefs(eventStore);


const tableRows = computed(() => list.value.data?.data)
const tableColumns = computed<NonNullable<QTableProps['columns']>>(() => {
  const cols: NonNullable<QTableProps['columns']> = props.columns.map(it => ({
    name: it,
    label: it,
    field: it,
    align: 'center',
    sortable: true,
  }))
  const res: NonNullable<QTableProps['columns']> = [
    { name: 'drag', label: '', field: '' },
    ...cols,
    { name: 'actions', label: '', field: '' },
  ]
  return res
})

const onUpdatePagination: QTableProps['onUpdate:pagination'] = (value) => {
  listOpts.value.rowsPerPage = value.rowsPerPage
  listOpts.value.descending = value.sortBy ? value.descending : !listOpts.value.descending
  listOpts.value.sortBy = value.sortBy ?? 'position'
}

const canDrag = computed(() => reorderState.value.state !== 'loading' && listOpts.value.sortBy === 'position')
const $root = ref<QTable>()
onMounted(() => {
  if (!$root.value) return
  const container = $root.value.$el as HTMLDivElement
  const body = container.querySelector('.q-virtual-scroll__content') as HTMLElement

  const sortable = Sortable.create(body, {
    animation: 150,
    handle: '.draggable-btn',
    onEnd: async (event) => {
      const entities = $root.value!.computedRows as TableEvent.Entity[] | undefined;
      if (!entities || event.newIndex === undefined || event.oldIndex === undefined) return;
      const oldPosition = entities[event.oldIndex].position
      const newPosition = entities[event.newIndex].position

      await reorder(oldPosition, newPosition);
    },
  })
  onBeforeUnmount(() => sortable.destroy())

})

</script>

<template>
  <q-table
    ref="$root"
    title="Events"
    :rows="tableRows"
    :columns="tableColumns"
    row-key="eventName"
    class="pa-3! mt-2 mx-2"
    virtual-scroll
    :loading="list.state === 'loading' || reorderState.state === 'loading'"
    :pagination="listOpts"
    @update:pagination="onUpdatePagination"
  >
    <template v-slot:pagination>
      <q-pagination
        :model-value="listOpts.page"
        @update:model-value="changePage"
        :max="totalPages"
        :max-pages="totalPages"
      />
    </template>

    <template v-slot:body-cell-drag="props">
      <q-td :props="props">
        <q-btn flat icon="drag_handle" :disable="!canDrag" class="draggable-btn px-2 py-0 c-tertiary [&_.q-icon]:text-md! items-center! cursor-grab"/>
        <div class="absolute z-1 left-0 top-0" :class="{'w-full h-full': !canDrag}"/>
      </q-td>
    </template>

    <template #body-cell-actions="actionProps">
      <event-cell-actions :event="actionProps.row"/>
    </template>
  </q-table>
</template>

<style scoped lang="scss">

</style>
