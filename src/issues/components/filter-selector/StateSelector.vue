<template>
  <div class="q-pa-md">
    <q-btn-toggle
      v-model="issuesStore.state"
      toggle-color="primary"
      push
      spread
      :options="[
        { label: 'All', value: '' },
        { label: 'Open', value: 'open' },
        { label: 'Closed', value: 'closed' },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { useIssuesStore } from 'src/stores/issues-store';

const issuesStore = useIssuesStore();
</script>

<style scoped></style>
