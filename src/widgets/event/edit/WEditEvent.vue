<script setup lang="ts">
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { FirebaseError } from 'firebase/app';
import { EEventFields } from 'entities/event';
import { TableEvent, useEventSingleStore  } from 'shared/api/event';
import { useProfileStore } from 'shared/api/profile';
import { ROUTES } from 'shared/config/routes';
import { useForm } from 'shared/lib/form';
import { SBtn } from 'shared/ui/btns';

const props = defineProps<{
  eventName: string
}>()

const eventStore = useEventSingleStore()
eventStore.fetchEvent(props.eventName)

const router = useRouter()

const { handleSubmit, setValues } = useForm({
  validationSchema: TableEvent.shape,
})

if (eventStore.event.state === 'success' && eventStore.event.data) {
  setValues(eventStore.event.data)
} else {
  const unwatch = watch(() => eventStore.event.data, () => {
    if (eventStore.event.state === 'success' && eventStore.event.data) {
      setValues(eventStore.event.data)
      unwatch()
    }
  })
}

const onSubmit = handleSubmit(async (values) => {
  const res = await eventStore.editEvent(props.eventName, values)
  if (res instanceof FirebaseError) return;
  router.push({ name: ROUTES.DASHBOARD.EVENTS })
})

</script>

<template>
  <q-card class="flex flex-col h-full">
    <q-card-section>
      <div class="text-h6">Edit Event</div>
    </q-card-section>

    <q-card-section class="q-pt-none flex-1">
      <q-scroll-area class="w-full h-full">

        <e-event-fields edit/>

      </q-scroll-area>
    </q-card-section>

    <q-card-actions align="right">
      <s-btn flat label="OK" color="primary" @click="onSubmit" :loading="eventStore.editState.state === 'loading'" />
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="scss">

</style>
