import type { ReactNode } from 'react';
import type { Dayjs } from 'dayjs';
import type { GetScoresDateGame } from '../../api';

export interface ScoresProviderProps {
  children?: ReactNode;
  gameDate: Dayjs | Date | string | null;
  initialValues?: {
    games: GetScoresDateGame[];
  };
  shouldRefetch?: boolean;
}
