import clsx from 'clsx';

export interface TeamScoreProps {
  score: number;
  isWinner?: boolean;
}

export function TeamScore({ score, isWinner }: TeamScoreProps) {
  return <p className={clsx('text-sm', isWinner && 'font-bold')}>{score}</p>;
}

export default TeamScore;
