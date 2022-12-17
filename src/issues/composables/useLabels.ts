import { computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import { Label } from 'src/issues/types/label';
import useStore from './useStore';

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi<Label[]>('/labels?per_page=100', {
    headers: {
      Authorization: null,
    },
  });
  return data;
};

const useLabels = () => {
  // const issuesStore = useIssuesStore();
  const store = useStore();

  const labelsQuery = useQuery(['labels'], getLabels, {
    // 1 hour
    staleTime: 1000 * 60 * 60,
  });

  return {
    labelsQuery,
    labels: store.labels,

    // selectedLabels: computed(() => issuesStore.labels),
    selectedLabels: computed(() => store.labels),
    // Methods
    toggleLabel: (labelName: string) => store.toggleLabel(labelName),
  };
};

export default useLabels;
