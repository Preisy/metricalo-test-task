<script setup lang="ts">
import type { Moment } from 'moment'
import type { QTableProps, QTableSlots } from 'quasar';
import { QTable } from 'quasar'
import Sortable from 'sortablejs'
import type { IPagination } from 'src/models/http/pagination'
import { $dateFormat } from 'src/utils/dates/format'
import type { IListState } from 'src/utils/state/listState'
import { useChangePage } from 'src/utils/store/paginationAction'
import { computed, onBeforeMount, onBeforeUnmount, onMounted, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

export type ATableRowContext = Parameters<QTableSlots['body-cell']>[0]
export type ATableColumn = Omit<Defined<QTableProps['columns']>[number], 'field'> & {
  field: string | ((row: any) => any)
  date?: boolean
  image?: boolean
}

const props = withDefaults(
  defineProps<{
    title?: string
    columns?: ATableColumn[]
    rowKey?: QTableProps['rowKey']
    list: IListState<any>
    fetch: (params?: IPagination.Params) => Promise<any>
    initPagination?: IPagination.Params
    rowClickHandler?: QTableProps['onRowClick']
    createHandler?: (createPath: string) => any
    sortable?: boolean | Sortable.Options
    sortLoading?: boolean
    noCreate?: boolean
    noSearch?: boolean
    searchLabel?: string
    createLabel?: string
    createPath?: string
    orderLabel?: string
    noOrder?: boolean
    noPagination?: boolean
    filter?: (query?: string) => IPagination.Params
  }>(),
  {
    createLabel: 'Создать',
    searchLabel: 'Поиск',
    createPath: 'create',
    orderLabel: '№',
  },
)

const router = useRouter()
const $root = ref<QTable>()

onBeforeMount(() => {
  // eslint-disable-next-line vue/no-mutating-props
  props.list.data = []
  props.fetch({ page: 1, size: 15, orderBy: undefined, sort: undefined, ...props.initPagination })
})
const changePage = useChangePage(props.fetch)

onMounted(() => {
  if (!props.sortable || !$root.value) return
  const container = $root.value.$el as HTMLDivElement
  const body = container.querySelector('tbody') as HTMLElement

  const defaults = typeof props.sortable === 'object' ? props.sortable : {}

  const sortable = Sortable.create(body, {
    animation: 150,
    handle: '.a-list-view__drag-handle',
    ...defaults,
  })

  watchEffect(() => sortable.option('disabled', props.sortLoading))
  onBeforeUnmount(() => sortable.destroy())
})

const columns = computed(() => {
  const columns = props.columns && [...props.columns]
  if (!columns) return undefined
  for (const c of columns) {
    if (c.date) c.format = (val: Moment) => val.format($dateFormat)
  }
  if (!props.noOrder) columns.unshift({ field: '_order', name: '_order', label: props.orderLabel, align: 'center' })
  if (props.sortable) columns.unshift({ field: '_handle', name: '_handle', label: '' })
  return columns
})
const cellSlotNames = (slots: Record<string, unknown>) => Object.keys(slots).filter((s) => s.startsWith('body-cell-'))
const imgCellSlotNames = computed(() => columns.value?.filter((col) => col.image).map((col) => `body-cell-${col.name}`))

const onRequest: QTable['onRequest'] = ({ pagination }) => {
  props.fetch({
    orderBy: pagination.sortBy ?? props.initPagination?.orderBy,
    sort: pagination.sortBy ? (pagination.descending ? 'DESC' : 'ASC') : props.initPagination?.sort,
    size: pagination.rowsPerPage,
    page: pagination.rowsPerPage !== props.list.pagination.size ? 1 : undefined,
  })
}

const searchQuery = ref<Nullable<string>>(null)
const search = () => {
  const query = searchQuery.value ?? undefined
  props.fetch(props.filter?.(query))
}
const noDataLabel = computed(() => `По запросу ${searchQuery.value ?  `${searchQuery.value}` : ''} ничего не найдено`)

const tablePagination = computed(() => ({
  descending: props.list.pagination.sort && props.list.pagination.sort === 'DESC',
  page: props.list.pagination.page,
  rowsNumber: props.list.pagination.size * props.list.pagination.totalPages,
  rowsPerPage: props.list.pagination.size,
  sortBy: props.list.pagination.orderBy,
}))

const onRowClick: QTableProps['onRowClick'] = (...params) => {
  if (props.rowClickHandler) props.rowClickHandler(...params)
  else router.push(`${router.currentRoute.value.path}/${params[1].id}`)
}
const onCreate = () => {
  if (props.createHandler) props.createHandler(props.createPath)
  else router.push(`${router.currentRoute.value.path}/${props.createPath}`)
}
</script>

<template>
  <q-table
    ref="$root"
    :title="title"
    :columns="columns"
    :rows="list.data"
    :row-key="rowKey"
    :loading="list.state.isLoading()"
    v-model:pagination="tablePagination"
    @request="onRequest"
    :no-data-label="noDataLabel"
    rows-per-page-label="Элементов на странице"
    :rows-per-page-options="[5, 15, 25]"
    @row-click="onRowClick"
    :hide-bottom="noPagination"
    color="primary"
    class="a-list-view"
  >
    <template v-if="list.state.isLoading()" #no-data>
      <q-icon name="sync" class="q-table__bottom-nodata-icon" />
      <span>Загрузка...</span>
    </template>
    <template v-if="$slots['top-left']" #top-left>
      <slot name="top-left" />
    </template>
    <template #top-right="props">
      <div class="flex q-gap-md">
        <slot name="top-right" v-bind="props" />
        <q-btn
          v-if="!noCreate"
          icon-right="add"
          :label="createLabel"
          @click="onCreate"
          color="primary"
          no-caps
          outline
        />
        <q-input
          v-if="!noSearch"
          :label="searchLabel"
          v-model="searchQuery"
          @update:model-value="search"
          :debounce="500"
          :loading="list.state.isLoading()"
          outlined
          clearable
          dense
        >
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </template>
    <template v-if="sortable" #body-cell-_handle="props: ATableRowContext">
      <q-td :props="props" auto-width class="a-list-view__drag-handle">
        <q-icon name="drag_indicator" />
      </q-td>
    </template>
    <template v-if="!noOrder" #body-cell-_order="props: ATableRowContext">
      <q-td :props="props" auto-width class="a-list-view__order">
        {{ props.rowIndex + 1 }}
      </q-td>
    </template>
    <template v-for="name of imgCellSlotNames" :key="name" #[name]="props: ATableRowContext">
      <q-td :props="props" auto-width>
        <a-show v-if="props.value" v-slot="{ setShow }">
          <a-img :src="props.value" @error="setShow(false)" />
        </a-show>
      </q-td>
    </template>
    <template v-for="name of cellSlotNames($slots)" :key="name" #[name]="props: ATableRowContext">
      <slot :name="name" v-bind="props" />
    </template>
    <template #pagination>
      <q-pagination
        :model-value="list.pagination.page"
        @update:model-value="changePage"
        :max="list.pagination.totalPages"
        :max-pages="6"
      />
    </template>
  </q-table>
</template>

<style lang="scss" scoped>
.a-list-view {
  &:deep(.q-table__top) {
    gap: var(--gap-sm);
  }
}
</style>
