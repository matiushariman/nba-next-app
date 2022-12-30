import { AppBar, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from '@nba-app/ui';
import { useContext } from 'react';
import Image from 'next/image';

export const Header = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={(theme) => ({
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.mode === 'light' ? '#051c2d' : '#000',
        color: '#fff',
      })}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Image
          src="https://cdn.nba.com/logos/leagues/logo-nba.svg"
          alt="NBA"
          width={52}
          height={30}
        />
        <IconButton
          onClick={colorMode.toggleColorMode}
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
          {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
