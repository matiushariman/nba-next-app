import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import type { GetScoresReq, GetScoresBaseRes } from '@nba-app/api-client';

export default async function scoresHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { gameDate } = JSON.parse(req.body) as GetScoresReq;

    const { data } = await axios.get<GetScoresBaseRes>(
      `https://sg.global.nba.com/stats2/scores/daily.json?gameDate=${gameDate}`
    );

    res.status(200).send(data);

    return;
  }

  res.status(404);
}
