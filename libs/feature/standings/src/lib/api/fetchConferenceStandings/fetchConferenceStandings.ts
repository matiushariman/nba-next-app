import axios from 'axios';

import type { FetchConferenceStandingsBaseRes } from './fetchConferenceStandings.types';

export const fetchConferenceStandings = async () => {
  const { data } = await axios.get<FetchConferenceStandingsBaseRes>(
    'https://sg.global.nba.com/stats2/season/conferencestanding.json'
  );

  return data.payload.standingGroups ?? [];
};
