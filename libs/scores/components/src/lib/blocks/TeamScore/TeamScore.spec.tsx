import { render, screen } from '@testing-library/react';

import TeamScore from './TeamScore';

describe('TeamScore', () => {
  it('should render score in normal style if !isWinner', () => {
    render(<TeamScore score={100} />);
    expect((screen.getByText('100') as HTMLElement).className).not.toContain(
      'font-bold'
    );
  });

  it('should render score in bold if isWinner', () => {
    render(<TeamScore score={100} isWinner />);
    expect((screen.getByText('100') as HTMLElement).className).toContain(
      'font-bold'
    );
  });
});
