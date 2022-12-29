import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

import type { TeamLogoProps } from './TeamLogo.types';

export const TeamLogo = ({
  id,
  name,
  width = 52,
  height = 52,
}: TeamLogoProps) => {
  const theme = useTheme();
  const logoMode = theme.palette.mode === 'dark' ? 'D' : 'L';

  return (
    <Image
      src={`https://cdn.nba.com/logos/nba/${id}/global/${logoMode}/logo.svg`}
      alt={name}
      width={width}
      height={height}
    />
  );
};