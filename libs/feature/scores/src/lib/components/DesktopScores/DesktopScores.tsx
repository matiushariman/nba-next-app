import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { useState } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { GamesList } from './GamesList';
import { Drawer } from './DesktopScores.styles';
import { ScoresProvider } from '../../context/ScoresContext';
import { formatDate } from '../../utils';

import type { Dayjs } from 'dayjs';
import type { DesktopScoresProps } from './DesktopScores.types';

export const DesktopScores = ({ games, shouldRefetch }: DesktopScoresProps) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | Date | null>(
    new Date()
  );
  const [open, setOpen] = useState(true);

  const handleChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  return (
    <Drawer
      open={open}
      variant="permanent"
      anchor="left"
      aria-label={open ? 'Expanded scoreboard' : 'Mini scoreboard'}
    >
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <IconButton
          color="primary"
          aria-label={open ? 'minimize scoreboard' : 'expand scoreboard'}
          onClick={() => {
            setOpen((prevOpen) => !prevOpen);
          }}
        >
          {open ? <ChevronLeftOutlinedIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
      <List>
        <ListItem>
          {open ? (
            <DesktopDatePicker
              inputFormat="ddd, MMM DD"
              value={selectedDate}
              onChange={handleChange}
              disableMaskedInput
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{ ...params.inputProps, readOnly: true }}
                  fullWidth
                />
              )}
            />
          ) : (
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontWeight: 'bold',
                  textAlign: 'center',
                },
              }}
              primary={formatDate(selectedDate, 'ddd, MMM DD')}
            />
          )}
        </ListItem>
        <ScoresProvider
          gameDate={selectedDate}
          initialValues={{
            games,
          }}
          shouldRefetch={shouldRefetch}
        >
          <GamesList isExpandedMode={open} />
        </ScoresProvider>
      </List>
    </Drawer>
  );
};
