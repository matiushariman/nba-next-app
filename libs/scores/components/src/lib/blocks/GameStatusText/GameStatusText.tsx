import {
  displayLiveGameStatusText,
  formatDate,
  convertESTtoLocalTime,
} from '@nba-app/scores-utils';

export interface GameStatusTextProps {
  statusDesc: string;
  status: '1' | '2' | '3';
  dateTimeEt: string;
  period: string;
  periodClock: string;
}

export function GameStatusText({
  status,
  dateTimeEt,
  period,
  statusDesc,
  periodClock,
}: GameStatusTextProps) {
  if (status === '1') {
    const localTime = convertESTtoLocalTime(dateTimeEt);

    return (
      <p className="text-sm" aria-label="game time in local time">
        {formatDate(localTime, 'h:mm A')}
      </p>
    );
  } else if (status === '2') {
    return (
      <p className="text-sm text-red-600">
        {displayLiveGameStatusText(period, periodClock, statusDesc)}
      </p>
    );
  }

  return <p className="text-sm">{statusDesc}</p>;
}

export default GameStatusText;
