import axios from 'axios';

import type { FetchScoresBaseRes, FetchScoresReq } from './fetchScores.types';

export const fetchScores = async ({ gameDate }: FetchScoresReq) => {
  const { data } = await axios.get<FetchScoresBaseRes>(
    `https://sg.global.nba.com/stats2/scores/daily.json?gameDate=${gameDate}`
  );

  return data.payload.date?.games ?? [];
};
