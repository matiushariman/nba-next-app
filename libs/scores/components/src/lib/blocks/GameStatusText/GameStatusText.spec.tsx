import { render, screen } from '@testing-library/react';

import GameStatusText from './GameStatusText';

describe('GameStatusText', () => {
  const props = {
    statusDesc: 'FINAL',
    dateTimeEt: '2022-12-29T19:00',
    period: '1',
    periodClock: '12:00',
  };

  it('should render game time if gameStatus === "1"', () => {
    render(<GameStatusText {...props} status="1" />);
    expect(screen.getByLabelText('game time in local time')).toBeDefined();
  });

  it('should render game clock if gameStatus === "2"', () => {
    render(<GameStatusText {...props} status="2" />);
    expect(screen.getByText('Q1 12:00')).toBeDefined();
  });

  it('should render game description if gameStatus === "3"', () => {
    render(<GameStatusText {...props} status="3" />);
    expect(screen.getByText('FINAL')).toBeDefined();
  });
});
