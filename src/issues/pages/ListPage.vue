<template>
  <div class="row q-mb-md">
    <div class="col-12">
      <span class="text-h3">GitHub Issues</span>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-4">
        <!-- TODO: Filters -->
        <FilterSelector />
      </div>
      <div class="col-xs-12 col-md-8">
        <!-- TODO: Loader -->
        <BaseLoaderSpinner message="Loading..." />
        <IssueList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseLoaderSpinner from 'src/shared/components/BaseLoaderSpinner.vue';
import FilterSelector from 'src/issues/components/filter-selector/FilterSelector.vue';
import IssueList from 'src/issues/components/issue-list/IssueList.vue';
</script>

<style scoped></style>
