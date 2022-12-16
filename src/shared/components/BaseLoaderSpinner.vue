<template>
  <div class="column items-center">
    <q-spinner :color="color" :size="size" :thickness="thickness" />
    <span v-if="message" class="q-mt-xs">{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
type Props = {
  color?: string;
  size?: string;
  message?: string;
  thickness?: number;
};
withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: '3rem',
  thickness: 5,
  message: '',
});
</script>

<style scoped></style>
