import useSWR from 'swr';
import axios from 'axios';

import type { UseFetchScore } from './useFetchScores.types';
import type { FetchScoresDateGame } from '../../api';

export const useFetchScores = ({ data, config }: UseFetchScore) => {
  return useSWR<FetchScoresDateGame[]>(
    ['/api/scores', data],
    ([url, data]) =>
      axios.post<FetchScoresDateGame[]>(url, data).then((res) => res.data),
    config
  );
};
