import Typography from '@mui/material/Typography';

import {
  convertESTtoLocalTime,
  formatDate,
  displayLiveGameStatusText,
} from '../../../../../utils';

import type { MobileGameStatusProps } from './MobileGameStatus.types';

export const MobileGameStatus = ({
  statusDesc,
  status,
  dateTimeEt,
  period,
  periodClock,
}: MobileGameStatusProps) => {
  if (status === '1') {
    const localDate = convertESTtoLocalTime(dateTimeEt);

    return (
      <Typography
        aria-label="game starting time"
        textTransform="uppercase"
        fontWeight="bold"
        variant="caption"
        textAlign="right"
      >
        {formatDate(localDate, 'H:mm A')}
      </Typography>
    );
  } else if (status === '2') {
    return (
      <Typography
        textTransform="uppercase"
        variant="caption"
        textAlign="right"
        sx={(theme) => ({
          color: theme.palette.error.main,
        })}
      >
        {displayLiveGameStatusText(period, periodClock, statusDesc)}
      </Typography>
    );
  }

  return (
    <Typography textTransform="uppercase" variant="caption" textAlign="right">
      {statusDesc}
    </Typography>
  );
};