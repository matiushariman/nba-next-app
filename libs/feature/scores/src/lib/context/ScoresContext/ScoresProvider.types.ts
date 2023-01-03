import type { ReactNode } from 'react';
import type { Dayjs } from 'dayjs';
import type { GetScoresDateGame } from '@nba-app/api-client';

export interface ScoresProviderProps {
  children?: ReactNode;
  gameDate: Dayjs | Date | string | null;
  initialValues?: {
    games: GetScoresDateGame[];
  };
  shouldRefetch?: boolean;
}
