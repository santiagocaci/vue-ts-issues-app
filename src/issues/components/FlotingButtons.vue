<template>
  <div class="fab">
    <q-btn
      v-for="button of buttons"
      :key="button.icon"
      round
      color="primary"
      :icon="button.icon"
      :size="button.size"
      @click="button.onClick"
    />
  </div>
</template>

<script setup lang="ts">
import { QBtnProps } from 'quasar';

type Props = {
  buttons: QBtnProps[];
};

withDefaults(defineProps<Props>(), { buttons: () => [] });
</script>

<style scoped>
.fab {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
