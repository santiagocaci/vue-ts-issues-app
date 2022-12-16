<template>
  <div class="row">
    <IssueListItem v-for="issue of issues" :key="issue.id" :issue="issue" />
  </div>
</template>

<script setup lang="ts">
import IssueListItem from './IssueListItem.vue';
import { type Issue } from 'src/issues/types/issue';

type Props = {
  issues: Issue[];
};
defineProps<Props>();
</script>

<style scoped></style>
