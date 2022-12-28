import useSWR, { SWRConfiguration } from 'swr';

import { fetchScores } from './fetchScores';
import { GET_SCORES_API_URL } from './getScores.constants';
import type { GetScoresReq } from './getScores.types';

export interface UseGetScoresWithSWR {
  readonly data: GetScoresReq;
  config?: SWRConfiguration;
}

export const useGetScoresWithSWR = ({ data, config }: UseGetScoresWithSWR) => {
  return useSWR(
    [GET_SCORES_API_URL, data],
    ([url, data]) => fetchScores(url, data),
    config
  );
};
