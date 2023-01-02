export const displayGameBehind = (gameBehind: string) =>
  gameBehind === '0' ? '-' : gameBehind;

export const displayWinLoseRecord = (wins: number, losses: number) =>
  `${wins} - ${losses}`;
