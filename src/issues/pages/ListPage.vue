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
        <BaseLoaderSpinner
          v-if="issuesQuery.isLoading.value"
          message="Loading..."
        />
        <IssueList
          v-else-if="issuesQuery.data.value"
          :issues="issuesQuery.data?.value || []"
        />
      </div>
    </div>
  </div>

  <FlotingButtons
    :buttons="[
      { icon: 'add', color: 'secundary', size: 'md', onClick: openDialog },
    ]"
  />

  <NewIssueDialog
    v-if="labelsQuery.data"
    :is-open="isOpenModal"
    :labels="labelsQuery.data.value?.map((label) => label.name) || []"
    @on-close="isOpenModal = false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

import useIssues from 'src/issues/composables/useIssues';
import useLabels from 'src/issues/composables/useLabels';
import FilterSelector from 'src/issues/components/filter-selector/FilterSelector.vue';
import IssueList from 'src/issues/components/issue-list/IssueList.vue';
import FlotingButtons from 'src/issues/components/FlotingButtons.vue';
import NewIssueDialog from 'src/issues/components/NewIssueDialog.vue';

import BaseLoaderSpinner from 'src/shared/components/BaseLoaderSpinner.vue';

const { issuesQuery } = useIssues();
const { labelsQuery } = useLabels();
const isOpenModal = ref<boolean>(false);

const openDialog = () => (isOpenModal.value = true);
</script>

<style scoped></style>
