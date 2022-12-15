<template>
  <BaseLoaderSpinner size="4rem" color="secundary" />

  <q-chip v-for="label of 10" :key="label" clickable color="secundary">
    Algun nombre
  </q-chip>
</template>

<script setup lang="ts">
import BaseLoaderSpinner from 'src/shared/components/BaseLoaderSpinner.vue';
</script>

<style scoped></style>
