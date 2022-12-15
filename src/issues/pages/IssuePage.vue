<template>
  <BaseLoaderSpinner message="Loading Issues" />
  <router-link to="/" class="text-white">Go Back</router-link>

  <!-- Header -->
  <IssueListItem />

  <!-- Comments -->
  <BaseLoaderSpinner size="2rem" message="Loading comments" />
  <div class="column">
    <span class="text-h3">Comments (5)</span>
    <IssueListItem v-for="comment of 5" :key="comment" />
  </div>
</template>

<script setup lang="ts">
// import { useRoute } from 'vue-router';
import BaseLoaderSpinner from 'src/shared/components/BaseLoaderSpinner.vue';
import IssueListItem from 'src/issues/components/issue-list/IssueListItem.vue';

// const route = useRoute();
</script>

<style scoped></style>
