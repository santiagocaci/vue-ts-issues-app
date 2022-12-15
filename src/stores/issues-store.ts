import { defineStore } from 'pinia';
import { ref } from 'vue';

enum State {
  All = '',
  Open = 'open',
  Closed = 'closed',
}

export const useIssuesStore = defineStore('issues', () => {
  // State
  const state = ref<State>(State.All); // TODO:  Define type of state
  const labels = ref<string[]>([]);

  // Actions
  function toggleLabel(labelName: string) {
    // TODO: Implement toggleLabel
    throw new Error('toggleLabel not implemented');
  }
  return {
    // State
    labels,
    state,

    // Getters

    // Actions
    toggleLabel,
  };
});
