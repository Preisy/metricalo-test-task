import { runTransaction } from 'firebase/firestore';
import { defineStore } from 'pinia';
import { computed, reactive, watch } from 'vue';
import { FirebaseError } from 'firebase/app';
import { Notify, useState, useStoreAction } from 'shared/lib/store';
import { useEventListStore } from './list-store';
import { EventService } from './service';
import type { TableEvent } from './types';

export const useEventSingleStore = defineStore('event-single', () => {
  const eventService = new EventService()
  const listStore = useEventListStore()

  const event = reactive(useState<TableEvent.Entity>('unset'))

  const fetchEvent = (eventName: TableEvent.Entity['eventName']) => useStoreAction({
    state: event,
    action: eventService.findOneByEventName(eventName),
    onSuccess: (res) => {
      event.data = res
    },
    onError: (e) => Notify.error(e.message),
  })

  const deleteState = reactive(useState('unset'))

  const deleteEvent = (eventName: TableEvent.Entity['eventName']) => useStoreAction({
    state: deleteState,
    action: listStore.deleteOne(eventName),
    onSuccess: () => {
      event.data = null;
    },
    onError: (e) => Notify.error(e.message),
  })

  const editState = reactive(useState('unset'))
  const editEvent = (eventName: TableEvent.Entity['eventName'], payload: Partial<TableEvent.Entity>) => useStoreAction({
    state: editState,
    action: listStore.patchOneEvent(eventName, payload),
    onSuccess: (res) => {
      if (res instanceof FirebaseError) return;
      event.data = res
    },
    onError: (e) => Notify.error(e.message),
  })

  return {
    event,
    fetchEvent,

    deleteState,
    deleteEvent,

    editState,
    editEvent,
  }
})
