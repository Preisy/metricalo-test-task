<script setup lang="ts">
import { nextTick, watch } from 'vue';
import * as yup from 'yup';
import type { TableEvent } from 'shared/api/event';
import { useForm } from 'shared/lib/form';
import { SSelect } from 'shared/ui/form';

type EventKeyofArr = (keyof TableEvent.Entity)[];

interface EventsListSelectColumnsProps {
  modelValue: EventKeyofArr
}
const props = defineProps<EventsListSelectColumnsProps>();


const emit = defineEmits<{
  (e: 'update:modelValue', data: EventKeyofArr): void
}>()
const options: EventKeyofArr = ['firstName', 'lastName', 'email', 'organization', 'phone', 'date', 'country', 'eventName', 'position', 'text']

const { values, isFieldValid, setTouched } = useForm({
  validationSchema: yup.object({
    columns: yup.array().of(yup.string().required().oneOf(options)).min(3).required(),
  }),
  initialValues: { columns: props.modelValue },
})
watch(values, async (newValue) => {
  await nextTick()

  if (isFieldValid('columns')) emit('update:modelValue', newValue.columns)
  else setTouched(true)
})

</script>

<template>
  <s-select name="columns" :options="options" multiple options-selected-class="bg-tertiary/10" />
</template>

<style scoped lang="scss">

</style>
