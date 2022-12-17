import { storeToRefs } from 'pinia';
import { useIssuesStore } from 'src/stores/issues-store';

const useStore = () => {
  const issuesStore = useIssuesStore();
  const { labels, state } = storeToRefs(issuesStore);
  const { toggleLabel } = issuesStore;
  return { labels, state, toggleLabel };
};

export default useStore;
