import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import { Issue } from 'src/issues/types/issue';

type Args = {
  title: string;
  body?: string;
  labels?: string[];
};

const addIssue = async ({
  title,
  body = '',
  labels = [],
}: Args): Promise<Issue> => {
  const newIssueData = {
    title,
    body,
    labels,
  };
  const { data } = await githubApi.post<Issue>('/issues', newIssueData);
  return data;
};

const useIssueMutation = () => {
  const queryClient = useQueryClient();
  const issueMutation = useMutation(addIssue, {
    onSuccess: (issue) => {
      queryClient.invalidateQueries({ queryKey: ['issues'], exact: false });
      queryClient.refetchQueries({ queryKey: ['issues'], exact: false });
      queryClient.setQueryData(['issues', issue.number], issue);
    },
  });
  return { issueMutation };
};

export default useIssueMutation;
