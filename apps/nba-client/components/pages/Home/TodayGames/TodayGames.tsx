import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useEffect, useState } from 'react';
import { useGetScoresWithSWR } from '@nba-app/api-client';

import { TodayGame } from './TodayGame';
import { getTodayDate } from '../../../../utils/getTodayDate';

import type { TodayGamesProps } from './TodayGames.types';

const drawerWidth = 445;

export const TodayGames = ({ games }: TodayGamesProps) => {
  const [todayGames, setTodayGames] = useState(games);
  const { data } = useGetScoresWithSWR({
    data: {
      gameDate: getTodayDate(),
    },
    config: {
      refreshInterval: 30000,
    },
  });

  useEffect(() => {
    if (data) {
      setTodayGames(data);
    }
  }, [data]);

  return (
    <Drawer
      open
      variant="persistent"
      anchor="left"
      sx={(theme) => ({
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          ...(theme.palette.mode === 'light' && {
            backgroundColor: theme.palette.grey.A200,
          }),
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      })}
    >
      <Toolbar />
      <List>
        <ListItem>
          <ListItemText
            primaryTypographyProps={{
              sx: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
            primary={getTodayDate('ddd, MMM DD')}
          />
        </ListItem>
        {todayGames.map((game) => (
          <ListItem key={game.profile.gameId}>
            <TodayGame game={game} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
