import { render, screen } from '@testing-library/react';

import TeamDetails from './TeamDetails';

describe('TeamDetails', () => {
  const props = {
    teamId: '1610612738',
    teamName: 'Celtics',
    teamAbbr: 'BOS',
    teamRecord: '82-0',
  };

  it('should render team record is game has not started', () => {
    render(
      <TeamDetails
        {...props}
        isWinner={false}
        hasGameStarted={false}
        score={0}
      />
    );

    expect(screen.getByText('82-0')).toBeDefined();
  });

  it('should render score is game has started', () => {
    render(
      <TeamDetails
        {...props}
        isWinner={true}
        hasGameStarted={true}
        score={122}
      />
    );

    expect(screen.getByText('122')).toBeDefined();
  });
});
