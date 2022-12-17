import { storeToRefs } from 'pinia';
import { useIssuesStore } from 'src/stores/issues-store';

const useStore = () => {
  const issuesStore = useIssuesStore();
  const { labels, state } = storeToRefs(issuesStore);
  return { labels, state };
};

export default useStore;
