import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';

const useDesktopView = () => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
};

export default useDesktopView;
