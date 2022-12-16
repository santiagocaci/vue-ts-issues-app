import { computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { useIssuesStore } from 'src/stores/issues-store';
import { githubApi } from 'src/api/githubApi';
import { Label } from 'src/issues/types/label';

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi<Label[]>('/labels?per_page=100', {
    headers: {
      Authorization: null,
    },
  });
  return data;
};

const useLabels = () => {
  const issuesStore = useIssuesStore();

  const labelsQuery = useQuery(['labels'], getLabels, {
    // 1 hour
    staleTime: 1000 * 60 * 60,
  });

  return {
    labelsQuery,

    // selectedLabels: computed(() => issuesStore.labels),
    selectedLabels: computed(() => issuesStore.labels),
    // Methods
    toggleLabel: (labelName: string) => issuesStore.toggleLabel(labelName),
  };
};

export default useLabels;
