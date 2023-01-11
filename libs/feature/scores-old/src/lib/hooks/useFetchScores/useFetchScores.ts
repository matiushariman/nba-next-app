import useSWR from 'swr';
import axios from 'axios';

import type { SWRConfiguration } from 'swr';

import type {
  FetchScoresReq,
  FetchScoresDateGame,
} from '../../api/fetchScores';

export interface UseFetchScore {
  readonly data: FetchScoresReq;
  readonly config?: SWRConfiguration;
}

const useFetchScores = ({ data, config }: UseFetchScore) => {
  return useSWR<FetchScoresDateGame[]>(
    ['/api/scores', data],
    ([url, data]) =>
      axios.post<FetchScoresDateGame[]>(url, data).then((res) => res.data),
    config
  );
};

export default useFetchScores;
