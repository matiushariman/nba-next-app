import { NextApiRequest, NextApiResponse } from 'next';
import {
  fetchScores,
  FetchScoresReq,
  FetchScoresDateGame,
} from '@nba-app/feature-scores';
import useSWR, { SWRConfiguration } from 'swr';
import axios from 'axios';

interface UseFetchScoresWithSWR {
  readonly data: FetchScoresReq;
  readonly config?: SWRConfiguration;
}

export const useFetchScoresWithSWR = ({
  data,
  config,
}: UseFetchScoresWithSWR) => {
  return useSWR<FetchScoresDateGame[]>(
    ['/api/scores', data],
    ([url, data]) =>
      axios.post<FetchScoresDateGame[]>(url, data).then((res) => res.data),
    config
  );
};

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
