import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import useStore from 'src/issues/composables/useStore';
import { type State, type Issue } from 'src/issues/types/issue';

const getIssues = async (labels: string[], state: State): Promise<Issue[]> => {
  const params = new URLSearchParams();

  if (state) params.append('state', state);
  if (labels.length > 0) {
    const labelsString = labels.join(',');
    params.append('labels', labelsString);
  }

  params.append('per_page', '10');
  const { data } = await githubApi.get<Issue[]>('/issues', {
    params,
  });
  return data;
};

const useIssues = () => {
  const { labels, state } = useStore();

  const issuesQuery = useQuery(['issues', { labels, state }], () =>
    getIssues(labels.value, state.value)
  );

  return { issuesQuery };
};

export default useIssues;
