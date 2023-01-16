interface ApiResContextUser {
  countryCode: string;
  countryName: string;
  locale: string;
  timeZone: string;
  timeZoneCity: string;
}

interface ApiResContextDevice {
  clazz: null;
}

interface ApiResContext {
  user: ApiResContextUser;
  device: ApiResContextDevice;
}

interface ApiResError {
  detail: null | string;
  isError: 'false' | 'true';
  message: null | string;
}

interface ApiResBasePayloadLeague {
  id: string;
  name: string;
}

interface ApiResBasePayloadSeason {
  isCurrent: 'true' | 'false';
  rosterSeasonType: number;
  rosterSeasonYear: string;
  rosterSeasonYearDisplay: string;
  scheduleSeasonType: number;
  scheduleSeasonYear: string;
  scheduleYearDisplay: string;
  statsSeasonType: number;
  statsSeasonYear: string;
  statsSeasonYearDisplay: string;
  year: string;
  yearDisplay: string;
}

interface ApiResBasePayload {
  league: ApiResBasePayloadLeague;
  season: ApiResBasePayloadSeason;
}

export interface ApiRes<T> {
  context: ApiResContext;
  error: ApiResError;
  payload: ApiResBasePayload & T;
  timestamp: string;
}
