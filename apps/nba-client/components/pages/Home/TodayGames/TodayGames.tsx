import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';

import { TodayGame } from './TodayGame';

import type { TodayGamesProps } from './TodayGames.types';
import Image from 'next/image';

const drawerWidth = 400;

export const TodayGames = ({ games }: TodayGamesProps) => {
  return (
    <Drawer
      open
      variant="persistent"
      anchor="left"
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          backgroundColor: theme.palette.primary.main,
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      })}
    >
      <Toolbar sx={{ justifyContent: 'space-around' }}>
        <Image
          src="https://cdn.nba.com/logos/leagues/logo-nba.svg"
          alt="NBA"
          width={52}
          height={30}
        />
      </Toolbar>
      <Divider />
      <List>
        {games.map((game) => (
          <ListItem key={game.profile.gameId}>
            <TodayGame game={game} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
