import { NextApiRequest, NextApiResponse } from 'next';
import { fetchScores, FetchScoresReq } from '@nba-app/feature-scores';

export default async function scoresHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { gameDate } = req.body as FetchScoresReq;

    const data = await fetchScores({ gameDate });

    res.status(200).send(data);

    return;
  }

  res.status(404);
}
