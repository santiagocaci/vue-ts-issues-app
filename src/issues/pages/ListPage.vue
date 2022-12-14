<template>
  <div class="row q-mb-md">
    <div class="col-12">
      <span class="text-h3">GitHub Issues</span>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-4">
        <!-- TODO: Filters -->
        <!-- FilterSelector -->
      </div>
      <div class="col-xs-12 col-md-8">
        <!-- TODO: Loader -->
        <BaseLoaderSpinner message="Loading..." />
        <!-- TODO: IssueList - Array of IssueCard -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseLoaderSpinner from 'src/shared/components/BaseLoaderSpinner.vue';
</script>

<style scoped></style>
