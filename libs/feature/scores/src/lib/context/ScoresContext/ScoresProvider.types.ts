import type { ReactNode } from 'react';
import type { Dayjs } from 'dayjs';
import type { FetchScoresDateGame } from '../../api';

export interface ScoresProviderProps {
  children?: ReactNode;
  gameDate: Dayjs | Date | string | null;
  initialValues?: {
    games: FetchScoresDateGame[];
  };
  shouldRefetch?: boolean;
}
