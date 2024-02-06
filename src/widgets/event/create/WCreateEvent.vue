<script setup lang="ts">
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { FirebaseError } from 'firebase/app';
import { EEventFields } from 'entities/event';
import { TableEvent, useEventListStore } from 'shared/api/event';
import { useProfileStore } from 'shared/api/profile';
import { ROUTES } from 'shared/config/routes';
import { useForm } from 'shared/lib/form';
import { SBtn } from 'shared/ui/btns';

const eventStore = useEventListStore()
const profileStore = useProfileStore()
const router = useRouter()

const { handleSubmit, setValues } = useForm({
  validationSchema: TableEvent.shape,
})

if (profileStore.me.state === 'success' && profileStore.me.data) {
  setValues(profileStore.me.data)
} else {
  const unwatch = watch(() => profileStore.me.data, () => {
    if (profileStore.me.state === 'success' && profileStore.me.data) {
      setValues(profileStore.me.data)
      unwatch()
    }
  })
}

const onSubmit = handleSubmit(async (values) => {
  const res = await eventStore.create(values)
  if (res instanceof FirebaseError) return;
  router.push({ name: ROUTES.DASHBOARD.EVENTS })
})

</script>

<template>
  <q-card class="flex flex-col h-full">
    <q-card-section>
      <div class="text-h6">Create Event</div>
    </q-card-section>

    <q-card-section class="q-pt-none flex-1">
      <q-scroll-area class="w-full h-full">

        <e-event-fields/>

      </q-scroll-area>
    </q-card-section>

    <q-card-actions align="right">
      <s-btn flat label="OK" color="primary" @click="onSubmit" :loading="eventStore.createState.state === 'loading'" />
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="scss">

</style>
