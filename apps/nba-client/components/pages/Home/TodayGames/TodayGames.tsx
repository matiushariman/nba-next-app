import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { useEffect, useState } from 'react';
import { useGetScoresWithSWR } from '@nba-app/api-client';

import { TodayGame } from './TodayGame';
import { MiniTodayGame } from './MiniTodayGame';
import { getTodayDate } from '../../../../utils/getTodayDate';

import type { TodayGamesProps } from './TodayGames.types';

const drawerWidth = 445;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  ...(theme.palette.mode === 'light' && {
    backgroundColor: theme.palette.grey.A200,
  }),
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 195,
  ...(theme.palette.mode === 'light' && {
    backgroundColor: theme.palette.grey.A200,
  }),
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export const TodayGames = ({ games }: TodayGamesProps) => {
  const [todayGames, setTodayGames] = useState(games);
  const [open, setOpen] = useState(true);
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
    <Drawer open={open} variant="permanent" anchor="left">
      <Toolbar />
      <List>
        <ListItem sx={{ position: 'relative' }}>
          <IconButton
            color="primary"
            aria-label={open ? 'minimize scores' : 'expand scores'}
            onClick={() => {
              setOpen((prevOpen) => !prevOpen);
            }}
          >
            {open ? <ChevronLeftOutlinedIcon /> : <MenuIcon />}
          </IconButton>
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
          <ListItem key={game.profile.gameId} disablePadding={!open}>
            {open ? <TodayGame game={game} /> : <MiniTodayGame game={game} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
