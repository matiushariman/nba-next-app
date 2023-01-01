import Paper from '@mui/material/Paper';
import { useState } from 'react';

import { MobileTodayGamesList } from './MobileTodayGamesList';
import { GamesProvider } from '../../../../../context/GamesContext';

import type { Dayjs } from 'dayjs';
import type { MobileTodayGamesProps } from './MobileTodayGames.types';

const MobileTodayGames = ({ games }: MobileTodayGamesProps) => {
  const [selectedDate] = useState<Dayjs | Date>(new Date());

  return (
    <Paper>
      <GamesProvider gameDate={selectedDate} initialValues={{ games }}>
        <MobileTodayGamesList />
      </GamesProvider>
    </Paper>
  );
};

export default MobileTodayGames;
