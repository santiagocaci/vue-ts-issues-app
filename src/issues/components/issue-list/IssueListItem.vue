<template>
  <q-card class="text-black col-12 q-mb-md" flat bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img :src="issue.user.avatar_url" alt="User Avatar" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>
          <router-link :to="`issue/${issue.number}`">{{
            issue.title
          }}</router-link>
        </q-item-label>
        <q-item-label caption>
          {{ timeSince(issue.created_at) }} ago
        </q-item-label>
      </q-item-section>

      <q-item-section>
        <q-item-label class="row items-center justify-end">
          <q-item-label class="q-mr-md">
            <q-icon name="question_answer" />
            {{ issue.comments }}
          </q-item-label>
          <q-chip
            v-if="issue.state === 'closed'"
            color="positive"
            text-color="white"
            icon="check"
          >
            Closed
          </q-chip>
          <q-chip
            v-if="issue.state === 'open'"
            color="negative"
            text-color="white"
            icon="bug_report"
          >
            Open
          </q-chip>
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-item-section v-if="issue.body" class="q-pa-md markdown-css">
      <vue-markdown :source="issue.body" />
    </q-item-section>

    <q-separator />

    <q-item-section class="q-pa-xs q-gutter-xs">
      <div class="row grap">
        <q-chip
          v-for="label of issue.labels"
          :key="label.id"
          :style="{
            'background-color': `#${label.color}`,
          }"
        >
          {{ label.name }}
        </q-chip>
      </div>
    </q-item-section>
  </q-card>
</template>

<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render';
import { timeSince } from 'src/shared/helpers/time-since';
import { type Issue } from 'src/issues/types/issue';

type Props = {
  issue: Issue;
};

defineProps<Props>();
</script>

<style scoped></style>
