import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';

export const useDesktopView = () => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
};
