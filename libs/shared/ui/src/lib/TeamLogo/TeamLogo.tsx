import Image from 'next/image';

export interface TeamLogoProps {
  id: string;
  name: string;
  width?: number;
  height?: number;
}

export const TeamLogo = ({
  id,
  name,
  width = 52,
  height = 52,
}: TeamLogoProps) => {
  return (
    <Image
      src={`https://cdn.nba.com/logos/nba/${id}/global/D/logo.svg`}
      alt={name}
      width={width}
      height={height}
    />
  );
};

export default TeamLogo;
