import { rest } from 'msw';

import { mockFetchConferenceStandingsRes } from './mockData';
import { FetchConferenceStandingsBaseRes } from '../index';

export const handlers = [
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
