import type { GetScoresBaseRes, GetScoresReq } from './getScores.types';

export const fetchScores = async (url: string, data: GetScoresReq) => {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  const scores: GetScoresBaseRes = await res.json();

  return scores.payload.date?.games ?? [];
};
