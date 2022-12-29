import { convertESTtoLocalTime } from '@nba-app/date-utils';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

import { getLiveStatus } from '../../../../../../utils/getLiveStatus';

import type { MinTodayGameStatusProps } from './MiniTodayGameStatus.types';

export const MiniTodayGameStatus = ({
  statusDesc,
  status,
  dateTimeEt,
  period,
  periodClock,
}: MinTodayGameStatusProps) => {
  if (status === '1') {
    const localDate = convertESTtoLocalTime(dateTimeEt);

    return (
      <Typography textTransform="uppercase" fontWeight="bold" variant="body2">
        {dayjs(localDate).format('H:mm A')}
      </Typography>
    );
  } else if (status === '2') {
    return (
      <Typography
        textTransform="uppercase"
        variant="body2"
        sx={(theme) => ({
          color: theme.palette.error.main,
          display: 'flex',
          alignItems: 'center',
        })}
      >
        {getLiveStatus({ period, periodClock, statusDesc })}
      </Typography>
    );
  }

  return (
    <Typography textTransform="uppercase" variant="body2">
      {statusDesc}
    </Typography>
  );
};
