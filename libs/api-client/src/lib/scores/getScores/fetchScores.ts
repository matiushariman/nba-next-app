import axios from 'axios';

import { GET_SCORES_API_URL } from './getScores.constants';

import type { GetScoresBaseRes, GetScoresReq } from './getScores.types';

export const fetchScores = (
  url = `http://localhost:4200${GET_SCORES_API_URL}`,
  data: GetScoresReq
) =>
  axios
    .post<GetScoresBaseRes>(url, data)
    .then((res) => res.data.payload.date?.games ?? []);
