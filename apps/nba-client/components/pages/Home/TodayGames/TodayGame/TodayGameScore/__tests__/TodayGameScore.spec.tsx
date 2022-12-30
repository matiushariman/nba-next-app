import { render, screen } from '@nba-app/test-utils-old';
import { TodayGameScore } from '../TodayGameScore';

describe(TodayGameScore, () => {
  it('should render nothing if game has not started (status 1)', () => {
    const { container } = render(
      <TodayGameScore awayScore={0} homeScore={0} status="1" />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('should render away score in bold if away team wins the game', () => {
    render(<TodayGameScore awayScore={120} homeScore={90} status="3" />);

    expect(screen.getByText('120')).toHaveStyle('font-weight: 700');
  });

  it('should render home score in bold if home team wins the game', () => {
    render(<TodayGameScore awayScore={90} homeScore={133} status="3" />);

    expect(screen.getByText('133')).toHaveStyle('font-weight: 700');
  });
});
