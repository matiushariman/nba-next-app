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
    return <p className="text-sm">{dateTimeEt}</p>;
  } else if (status === '2') {
    return (
      <p className="text-sm text-red-600">
        {period} {periodClock}
      </p>
    );
  }

  return <p className="text-sm">{statusDesc}</p>;
}

export default GameStatusText;
