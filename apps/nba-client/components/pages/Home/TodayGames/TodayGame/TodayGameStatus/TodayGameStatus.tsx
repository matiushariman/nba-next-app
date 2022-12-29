import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

import { getLiveStatus } from '../../../../../../utils/getLiveStatus';
import { getLocalTime } from '../../../../../../utils/getLocalTime';

import type { TodayGameStatusProps } from './TodayGameStatus.types';

export const TodayGameStatus = ({
  statusDesc,
  status,
  dateTimeEt,
  period,
  periodClock,
}: TodayGameStatusProps) => {
  if (status === '1') {
    const localDate = getLocalTime(dateTimeEt);

    return (
      <Typography
        textTransform="uppercase"
        textAlign="center"
        fontWeight="bold"
      >
        {dayjs(localDate).format('H:mm A')}
      </Typography>
    );
  } else if (status === '2') {
    return (
      <Typography
        textTransform="uppercase"
        textAlign="center"
        sx={(theme) => ({
          color: theme.palette.error.main,
        })}
      >
        {getLiveStatus({ period, periodClock, statusDesc })}
      </Typography>
    );
  }

  return (
    <Typography textTransform="uppercase" textAlign="center">
      {statusDesc}
    </Typography>
  );
};
