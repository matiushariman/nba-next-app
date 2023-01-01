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
import { formatDate } from '@nba-app/date-utils';

import { Drawer } from './TodayGames.styles';
import { TodayGame } from './TodayGame';
import { MiniTodayGame } from './MiniTodayGame';
import { GamesProvider, GamesConsumer } from '../../../../context/GamesContext';

import type { Dayjs } from 'dayjs';
import type { TodayGamesProps } from './TodayGames.types';

export const TodayGames = ({ games }: TodayGamesProps) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | Date>(new Date());
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
          <ListItemText
            primaryTypographyProps={{
              sx: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
            primary={
              open ? (
                <DesktopDatePicker
                  inputFormat="ddd, MMM DD"
                  value={selectedDate}
                  onChange={handleChange}
                  disableMaskedInput
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputProps={{ ...params.inputProps, readOnly: true }}
                    />
                  )}
                />
              ) : (
                formatDate(selectedDate, 'ddd, MMM DD')
              )
            }
          />
        </ListItem>
        <GamesProvider
          gameDate={selectedDate}
          initialValues={{
            games,
          }}
        >
          <GamesConsumer>
            {({ games: todayGames }) =>
              todayGames.map((game) => (
                <ListItem key={game.profile.gameId} disablePadding={!open}>
                  {open ? (
                    <TodayGame game={game} />
                  ) : (
                    <MiniTodayGame game={game} />
                  )}
                </ListItem>
              ))
            }
          </GamesConsumer>
        </GamesProvider>
      </List>
    </Drawer>
  );
};
