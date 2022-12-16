<template>
  <BaseLoaderSpinner v-if="isLoading" size="4rem" color="secundary" />
  <q-chip
    v-for="label of labels"
    v-else
    :key="label.id"
    clickable
    :outline="!isSelected(label.name)"
    :style="{
      color: `${isSelected(label.name) ? '' : `#${label.color}`}`,
      'background-color': `${isSelected(label.name) ? `#${label.color}` : ''}`,
    }"
    @click="toggleLabel(label.name)"
  >
    {{ label.name }}
  </q-chip>
</template>

<script setup lang="ts">
import useLabels from 'src/issues/composables/useLabels';
import BaseLoaderSpinner from 'src/shared/components/BaseLoaderSpinner.vue';

const { labelsQuery, toggleLabel, selectedLabels } = useLabels();
const { data: labels, isLoading } = labelsQuery;

const isSelected = (name: string) => selectedLabels.value.includes(name);
</script>

<style scoped></style>
