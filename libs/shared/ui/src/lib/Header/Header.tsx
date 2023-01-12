import Image from 'next/image';

export function Header() {
  return (
    <header className="from-primary to-primary-light flex min-h-[64px] items-center bg-gradient-to-r">
      <div className="container mx-auto px-4">
        <Image
          src="https://cdn.nba.com/logos/leagues/logo-nba.svg"
          alt="NBA"
          width={52}
          height={30}
        />
      </div>
    </header>
  );
}

export default Header;
