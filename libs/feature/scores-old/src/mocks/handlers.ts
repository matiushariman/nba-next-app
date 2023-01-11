import { rest } from 'msw';

import { mockFetchScoresRes } from './mockData';
import { FetchScoresBaseRes, FetchScoresDateGame } from '../index';

const handlers = [
  rest.get(
    'https://sg.global.nba.com/stats2/scores/daily.json',
    (req, res, ctx) =>
      res(ctx.status(200), ctx.json<FetchScoresBaseRes>(mockFetchScoresRes))
  ),
  rest.post('http://localhost/api/scores', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json<FetchScoresDateGame[]>(
        mockFetchScoresRes.payload.date?.games ?? []
      )
    )
  ),
];

export default handlers;
