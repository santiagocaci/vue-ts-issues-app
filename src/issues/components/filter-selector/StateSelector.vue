<template>
  <div class="q-pa-md">
    <q-btn-toggle
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

<script setup lang="ts"></script>

<style scoped></style>
