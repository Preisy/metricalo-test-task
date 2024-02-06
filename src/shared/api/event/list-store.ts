import { runTransaction } from 'firebase/firestore';
import { defineStore } from 'pinia';
import { computed, reactive, watch } from 'vue';
import { Notify, useState, useStoreAction } from 'shared/lib/store';
import { EventService } from './service';
import type { TableEvent } from './types';

export const useEventListStore = defineStore('event-list', () => {
  const eventService = new EventService()

  const list = reactive(useState<TableEvent.List.Res>('unset'))
  const listOpts = reactive<TableEvent.List.Req>({ page: 1, rowsPerPage: 5, sortBy: 'position', descending: false })
  const totalPages = computed(() => Math.ceil((list.data?.total ?? 0) / listOpts.rowsPerPage))

  const fetchList = () => useStoreAction({
    state: list,
    action: eventService.fetchList(listOpts),
    onSuccess: (res) => {
      if (!list.data) list.data = { data: [], total: 0 };

      const map = list.data.data.reduce((acc, it) => ({ ...acc, [it.eventName]: it }), {} as Record<string, TableEvent.Entity>)
      res.data.forEach((it) => map[it.eventName] = it);
      const uniqueArray = Object.values(map)
      uniqueArray.sort((a, b) => a.position - b.position)

      list.data.data = uniqueArray
      list.data.total = res.total
    },
    onError: (e) => Notify.error(e.message),
  })
  watch(() => [listOpts.page, listOpts.rowsPerPage], fetchList)

  const changePage = (value: number) => listOpts.page = value


  const createState = reactive(useState('unset'))
  const create = (req: TableEvent.Req) => useStoreAction({
    state: createState,
    action: eventService.create(req),
    onSuccess: () => fetchList(),
    onError: (e) => Notify.error(e.message),
  })

  const deleteOneState = reactive(useState('unset'))
  const deleteOne = (eventName: TableEvent.Entity['eventName']) => useStoreAction({
    state: deleteOneState,
    action: eventService.delete(eventName),
    onSuccess: () => {
      if (!list.data) return;
      list.data.data = list.data.data.filter(it => it.eventName !== eventName)
    },
    onError: (e) => Notify.error(e.message),
  })

  const patchOneState = reactive(useState('unset'))
  const patchOneEvent = (eventName: TableEvent.Entity['eventName'], payload: Partial<TableEvent.Entity>) => useStoreAction({
    state: patchOneState,
    action: eventService.patchOneByEventName(eventName, payload),
    onSuccess: (res) => {
      if (!list.data) return;
      list.data.data = list.data.data.map(it => {
        if (it.eventName === eventName) return res
        else return it
      })
    },
    onError: (e) => Notify.error(e.message),
  })

  const reorderState = reactive(useState('unset'))
  const reorder = (oldPosition: number, newPosition: number) => useStoreAction({
    state: reorderState,
    action: eventService.reoder(oldPosition, newPosition),
    onSuccess: fetchList,
  })

  return {
    list,
    listOpts,
    fetchList,
    changePage,
    totalPages,

    create,
    createState,

    deleteOne,
    deleteOneState,

    reorderState,
    reorder,

    patchOneState,
    patchOneEvent,
  }
})
