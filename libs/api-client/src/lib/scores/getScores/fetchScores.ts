import axios from 'axios';

import type { GetScoresBaseRes, GetScoresReq } from './getScores.types';

export const fetchScores = async ({ gameDate }: GetScoresReq) => {
  const { data } = await axios.get<GetScoresBaseRes>(
    `https://sg.global.nba.com/stats2/scores/daily.json?gameDate=${gameDate}`
  );

  return data.payload.date?.games ?? [];
};
