<script setup lang="ts">
import { SBtn } from 'shared/ui/btns';

interface AttentionDialogProps {
  modelValue: boolean
  footerLoading?: boolean
}
defineProps<AttentionDialogProps>();
defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'submit'): void
}>()


</script>

<template>
  <q-dialog :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
    <q-card>
      <q-card-section align="center">
        <div class="text-lg c-primary">
          <slot name="heading">Alert</slot>
        </div>
      </q-card-section>

      <q-card-section align="center">
        <div class="c-tertiary">
          <slot name="body"/>
        </div>
      </q-card-section>

      <q-card-actions align="center">
        <slot name="footer">
          <s-btn label="Ok" :loading="footerLoading" v-close-popup @click="$emit('submit')"/>
        </slot>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="scss">

</style>
