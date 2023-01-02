import { rest } from 'msw';

import type { GetScoresBaseRes } from '../lib/scores/getScores/getScores.types';
import type { FetchConferenceStandingsBaseRes } from '../lib/standings/fetchConferenceStandings/fetchConferenceStandings.types';
import { mockFetchConferenceStandingsRes, mockGetScoresRes } from './data';

export const handlers = [
  rest.get(
    'https://sg.global.nba.com/stats2/scores/daily.json',
    (req, res, ctx) =>
      res(ctx.status(200), ctx.json<GetScoresBaseRes>(mockGetScoresRes))
  ),
  rest.get('http://localhost/api/scores', (req, res, ctx) =>
    res(ctx.status(200), ctx.json<GetScoresBaseRes>(mockGetScoresRes))
  ),
  rest.get(
    'https://sg.global.nba.com/stats2/season/conferencestanding.json',
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json<FetchConferenceStandingsBaseRes>(
          mockFetchConferenceStandingsRes
        )
      )
  ),
];
