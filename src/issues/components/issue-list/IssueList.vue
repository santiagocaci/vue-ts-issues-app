<template>
  <div class="row">
    <IssueListItem v-for="issue of 10" :key="issue" />
  </div>
</template>

<script setup lang="ts">
import IssueListItem from './IssueListItem.vue';
</script>

<style scoped></style>
