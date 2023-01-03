import Typography from '@mui/material/Typography';
import LiveTvIcon from '@mui/icons-material/LiveTv';

import {
  convertESTtoLocalTime,
  formatDate,
  displayLiveGameStatusText,
} from '../../../../../utils';

import type { GameStatusProps } from './GameStatus.types';

export const GameStatus = ({
  statusDesc,
  status,
  dateTimeEt,
  period,
  periodClock,
}: GameStatusProps) => {
  if (status === '1') {
    const localDate = convertESTtoLocalTime(dateTimeEt);

    return (
      <Typography
        aria-label="game starting time"
        textTransform="uppercase"
        fontWeight="bold"
      >
        {formatDate(localDate, 'H:mm A')}
      </Typography>
    );
  } else if (status === '2') {
    return (
      <Typography
        textTransform="uppercase"
        sx={(theme) => ({
          color: theme.palette.error.main,
          display: 'flex',
          alignItems: 'center',
        })}
      >
        <span>
          <LiveTvIcon sx={{ mr: 1 }} />
        </span>
        <span>
          {displayLiveGameStatusText(period, periodClock, statusDesc)}
        </span>
      </Typography>
    );
  }

  return <Typography textTransform="uppercase">{statusDesc}</Typography>;
};
