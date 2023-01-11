export const displayLiveGameStatusText = (
  period: string,
  periodClock: string,
  statusDesc: string
) => {
  if (periodClock === '') {
    return statusDesc;
  }

  const periodText =
    Number(period) <= 4 ? `Q${period}` : `OT${Number(period) - 4}`;

  return `${periodText} ${periodClock}`;
};
