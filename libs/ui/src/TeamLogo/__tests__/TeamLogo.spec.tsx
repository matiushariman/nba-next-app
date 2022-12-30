import { render, screen } from '@nba-app/ui-test-utils-old';

import { TeamLogo } from '../TeamLogo';

describe('TeamLogo', () => {
  it('should render L logo when using light theme', () => {
    render(<TeamLogo id="1" name="Celtics" />);
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://cdn.nba.com/logos/nba/1/global/L/logo.svg'
    );
  });

  it('should render D logo when using dark theme', () => {
    render(<TeamLogo id="1" name="Celtics" />, { mode: 'dark' });
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://cdn.nba.com/logos/nba/1/global/D/logo.svg'
    );
  });
});
