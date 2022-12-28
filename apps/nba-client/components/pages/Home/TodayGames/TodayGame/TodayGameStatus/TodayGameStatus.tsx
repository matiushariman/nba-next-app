import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

import { getLocalTime } from '../../../../../../utils/getLocalTime';

import type { TodayGameStatusProps } from './TodayGameStatus.types';

export const TodayGameStatus = ({
  statusDesc,
  status,
  dateTimeEt,
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
  }

  return (
    <Typography textTransform="uppercase" textAlign="center">
      {statusDesc}
    </Typography>
  );
};
