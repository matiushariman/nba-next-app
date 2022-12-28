import { GET_SCORES_API_URL } from './getScores.constants';

import type { GetScoresBaseRes, GetScoresReq } from './getScores.types';

export const fetchScores = async (
  url = `http://localhost:4200${GET_SCORES_API_URL}`,
  data: GetScoresReq
) => {
  const res = await fetch('https://nba-next-app.vercel.app/api/scores', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  const scores: GetScoresBaseRes = await res.json();

  return scores.payload.date?.games ?? [];
};
