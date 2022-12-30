import { render, screen } from '@nba-app/ui-test-utils';

import { TeamLogo } from '../TeamLogo';

jest.mock('@mui/material/styles', () => ({
  ...(jest.requireActual('@mui/material/styles') as any),
  useTheme: jest
    .fn()
    .mockReturnValueOnce({
      palette: {
        mode: 'light',
      },
    })
    .mockReturnValueOnce({
      palette: {
        mode: 'dark',
      },
    }),
}));

describe(TeamLogo, () => {
  beforeEach(() => {
    render(<TeamLogo id="1" name="Celtics" />);
  });

  it('should render L logo when using light theme', () => {
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://cdn.nba.com/logos/nba/1/global/L/logo.svg'
    );
  });

  it('should render D logo when using dark theme', () => {
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://cdn.nba.com/logos/nba/1/global/D/logo.svg'
    );
  });
});
