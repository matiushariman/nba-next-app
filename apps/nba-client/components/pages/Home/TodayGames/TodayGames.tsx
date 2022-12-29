import dayjs, { Dayjs } from 'dayjs';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { useEffect, useState } from 'react';
import { useGetScoresWithSWR } from '@nba-app/api-client';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { TodayGame } from './TodayGame';
import { MiniTodayGame } from './MiniTodayGame';

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
  const [value, setValue] = useState<Dayjs>(dayjs());
  const [todayGames, setTodayGames] = useState(games);
  const [open, setOpen] = useState(true);
  const { data, isLoading } = useGetScoresWithSWR({
    data: {
      gameDate: dayjs(value).format('YYYY-MM-DD'),
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

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
              primary={
                open ? (
                  <DesktopDatePicker
                    inputFormat="ddd, MMM DD"
                    value={value}
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
                  dayjs(value).format('ddd, MMM DD')
                )
              }
            />
          </ListItem>
          {isLoading ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: 132,
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            todayGames.map((game) => (
              <ListItem key={game.profile.gameId} disablePadding={!open}>
                {open ? (
                  <TodayGame game={game} />
                ) : (
                  <MiniTodayGame game={game} />
                )}
              </ListItem>
            ))
          )}
        </List>
      </Drawer>
    </LocalizationProvider>
  );
};
