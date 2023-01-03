import useSWR from 'swr';
import axios from 'axios';

import type { UseFetchScore } from './useFetchScores.types';
import type { GetScoresDateGame } from '../../api';

export const useFetchScores = ({ data, config }: UseFetchScore) => {
  return useSWR<GetScoresDateGame[]>(
    ['/api/scores', data],
    ([url, data]) =>
      axios.post<GetScoresDateGame[]>(url, data).then((res) => res.data),
    config
  );
};
