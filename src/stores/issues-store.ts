import { ref } from 'vue';
import { defineStore } from 'pinia';

const OState = {
  All: '',
  Open: 'open',
  Closed: 'closed',
} as const;
type State = typeof OState[keyof typeof OState];

export const useIssuesStore = defineStore('issues', () => {
  // State
  const state = ref<State>('');
  const labels = ref<string[]>([]);

  // Actions
  function toggleLabel(labelName: string) {
    if (labels.value.includes(labelName)) {
      labels.value = labels.value.filter((label) => label !== labelName);
      return;
    }

    labels.value.push(labelName);
  }

  // Getters

  return {
    // State
    labels,
    state,

    // Getters

    // Actions
    toggleLabel,
  };
});
