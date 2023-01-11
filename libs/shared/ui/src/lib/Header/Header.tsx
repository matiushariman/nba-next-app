import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-primary-light min-h-[64px] px-4 flex items-center">
      <Image
        src="https://cdn.nba.com/logos/leagues/logo-nba.svg"
        alt="NBA"
        width={52}
        height={30}
      />
    </header>
  );
}

export default Header;
