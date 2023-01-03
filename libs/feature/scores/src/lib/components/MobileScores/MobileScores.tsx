import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useState } from 'react';

import { MobileGamesList } from './MobileGamesList';
import { ScoresProvider } from '../../context/ScoresContext';

import type { Dayjs } from 'dayjs';
import type { MobileScoresProps } from './MobileScores.types';

export const MobileScores = ({ games, shouldRefetch }: MobileScoresProps) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | Date | null>(
    new Date()
  );

  const handleChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  return (
    <Paper>
      <ScoresProvider
        gameDate={selectedDate}
        initialValues={{ games }}
        shouldRefetch={shouldRefetch}
      >
        <Box sx={{ display: 'flex', position: 'relative', height: 89 }}>
          <Box
            sx={(theme) => ({
              width: 160,
              p: 2,
              borderRight: `1px solid ${theme.palette.divider}`,
              display: 'flex',
              alignItems: 'center',
            })}
          >
            <MobileDatePicker
              inputFormat="ddd, MMM DD"
              value={selectedDate}
              onChange={handleChange}
              disableMaskedInput
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{ ...params.inputProps, readOnly: true }}
                  fullWidth
                  size="small"
                />
              )}
            />
          </Box>
          <Box
            sx={{
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              maxWidth: 'calc(100vw - 175px)',
            }}
          >
            <MobileGamesList />
          </Box>
        </Box>
      </ScoresProvider>
    </Paper>
  );
};
