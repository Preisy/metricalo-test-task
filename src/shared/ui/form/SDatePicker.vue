<script setup lang="ts">
import type { QDateProps } from 'quasar';
import { useField } from 'shared/lib/form';

interface SInputProps extends Omit<QDateProps, 'modelValue'> {
  name: string
  label?: string;
  placeholder?: string
}
const props = defineProps<SInputProps>()

const { errorMessage, value } = useField<string | number | undefined>(props.name)
</script>

<template>
  <div>
    <q-input
      v-model="value"
      :error="!!errorMessage"
      :error-message="errorMessage"
      outlined
      :label="label"
      class="s-input text-md [&_.q-field\_\_bottom]:pt-3px"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="value" mask="YYYY-MM-DD">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<style scoped lang="scss"></style>
