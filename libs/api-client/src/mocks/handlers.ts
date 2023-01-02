import { rest } from 'msw';

import type {
  GetScoresBaseRes,
  GetScoresDateGame,
} from '../lib/scores/getScores/getScores.types';
import { mockGetScoresRes } from './data';

export const handlers = [
  rest.get(
    'https://sg.global.nba.com/stats2/scores/daily.json',
    (req, res, ctx) =>
      res(ctx.status(200), ctx.json<GetScoresBaseRes>(mockGetScoresRes))
  ),
  rest.post('http://localhost/api/scores', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json<GetScoresDateGame[]>(mockGetScoresRes.payload.date?.games ?? [])
    )
  ),
];
