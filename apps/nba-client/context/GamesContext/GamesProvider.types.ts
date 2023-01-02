import type { ReactNode } from 'react';
import type { Dayjs } from 'dayjs';
import type { GetScoresDateGame } from '@nba-app/api-client';

export interface GamesProviderProps {
  children?: ReactNode;
  gameDate: Dayjs | Date | string;
  initialValues?: {
    games: GetScoresDateGame[];
  };
  shouldRefetch?: boolean;
}
