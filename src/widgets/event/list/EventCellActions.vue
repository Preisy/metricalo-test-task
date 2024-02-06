<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useEventListStore, type TableEvent } from 'shared/api/event';
import { ROUTES } from 'shared/config/routes';
import { SBtn } from 'shared/ui/btns';
import { AttentionDialog } from 'shared/ui/dialogs';

interface EventActionsProps {
  event: TableEvent.Entity
}
const props = defineProps<EventActionsProps>();

const eventStore = useEventListStore()

const isDeleteOpen = ref(false);
const onDelete = () => {
  eventStore.deleteOne(props.event.eventName)
}

const router = useRouter()
const onEdit = () => {
  router.push({ name: ROUTES.EVENT.EDIT, params: { eventName: props.event.eventName } })
}

</script>

<template>
  <q-td  class="relative">
    <q-btn icon="menu" flat class="px-2 py-0 c-tertiary [&_.q-icon]:text-md! items-center!">
      <q-menu>
        <q-list style="min-width: 100px">
          <s-btn label="Delete" class="b-rd-0! w-full" v-close-popup @click="isDeleteOpen = true"/>
          <s-btn label="Edit" class="b-rd-0! w-full" v-close-popup @click="onEdit"/>
        </q-list>
      </q-menu>
    </q-btn>

    <attention-dialog v-model="isDeleteOpen" @submit="onDelete" :footerLoading="eventStore.deleteOneState.state === 'loading'">
      <template #body>Delete event {{ event.eventName }} ?</template>
    </attention-dialog>
  </q-td>
</template>

<style scoped lang="scss">

</style>
