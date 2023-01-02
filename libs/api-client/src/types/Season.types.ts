export interface Season {
  readonly isCurrent: string;
  readonly rosterSeasonType: number;
  readonly rosterSeasonYear: string;
  readonly rosterSeasonYearDisplay: string;
  readonly scheduleSeasonType: number;
  readonly scheduleSeasonYear: string;
  readonly scheduleYearDisplay: string;
  readonly statsSeasonType: number;
  readonly statsSeasonYear: string;
  readonly statsSeasonYearDisplay: string;
  readonly year: string;
  readonly yearDisplay: string;
}
