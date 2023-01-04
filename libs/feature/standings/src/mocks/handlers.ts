import { rest } from 'msw';

import { mockFetchConferenceStandingsRes } from './mockData';

import type { FetchConferenceStandingsBaseRes } from '../lib/api/fetchConferenceStandings';

const handlers = [
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

export default handlers;
