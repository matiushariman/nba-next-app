import { rest } from 'msw';

import { mockFetchScoresRes } from './mockData';
import { FetchScoresBaseRes } from '..';

export const handlers = [
  rest.get(
    'https://sg.global.nba.com/stats2/scores/daily.json',
    (req, res, ctx) =>
      res(ctx.status(200), ctx.json<FetchScoresBaseRes>(mockFetchScoresRes))
  ),
];
