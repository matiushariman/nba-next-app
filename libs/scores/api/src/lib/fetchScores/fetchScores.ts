import axios from 'axios';
import { formatDate } from '@nba-app/scores-utils';

import type { FetchScoresBaseRes, FetchScoresReq } from './fetchScores.types';

export const fetchScores = async ({ gameDate }: FetchScoresReq) => {
  const { data } = await axios.get<FetchScoresBaseRes>(
    `https://sg.global.nba.com/stats2/scores/daily.json?gameDate=${formatDate(
      gameDate
    )}`
  );

  return data.payload.date?.games ?? [];
};

export default fetchScores;
