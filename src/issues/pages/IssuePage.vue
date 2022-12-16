<template>
  <router-link to="/" class="text-white">Go Back</router-link>

  <!-- Header -->
  <BaseLoaderSpinner
    v-if="issueQuery.isLoading.value"
    size="2rem"
    message="Loading comments"
  />
  <IssueListItem
    v-else-if="issueQuery.data.value"
    :issue="issueQuery.data.value"
  />
  <p v-else>Issue with ID {{ id }} not found</p>

  <!-- Comments -->
  <BaseLoaderSpinner
    v-if="issueCommentsQuery.isLoading.value"
    size="2rem"
    message="Loading comments"
  />
  <div v-else-if="issueCommentsQuery.data.value?.length !== 0" class="column">
    <span class="text-h3"
      >Comments ({{ issueCommentsQuery.data.value!.length }})</span
    >
    <IssueListItem
      v-for="comment of issueCommentsQuery.data.value"
      :key="comment.id"
      :issue="comment"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import BaseLoaderSpinner from 'src/shared/components/BaseLoaderSpinner.vue';
import IssueListItem from 'src/issues/components/issue-list/IssueListItem.vue';
import useIssue from 'src/issues/composables/useIssue';

const route = useRoute();
const id = route.params.id;

const { issueQuery, issueCommentsQuery } = useIssue(Number(id));
</script>

<style scoped></style>
