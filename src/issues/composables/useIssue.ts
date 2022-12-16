import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import { Issue } from 'src/issues/types/issue';

const getIssue = async (issueNumber: number): Promise<Issue> => {
  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
  return data;
};

const getIssueComments = async (issueNumber: number): Promise<Issue[]> => {
  const { data } = await githubApi.get<Issue[]>(
    `/issues/${issueNumber}/comments`
  );
  return data;
};

const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery(['issue', issueNumber], () =>
    getIssue(issueNumber)
  );

  const issueCommentsQuery = useQuery(['issue', issueNumber, 'comments'], () =>
    getIssueComments(issueNumber)
  );
  return { issueQuery, issueCommentsQuery };
};

export default useIssue;
