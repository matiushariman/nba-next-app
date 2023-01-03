import { render, screen } from '@nba-app/scores-test-utils';
import { ScoresProvider, ScoresConsumer } from '../ScoresProvider';

describe('ScoresContext', () => {
  it('should fetch games data from API', async () => {
    render(
      <ScoresProvider
        gameDate="2022-12-25"
        initialValues={{
          games: [],
        }}
      >
        <ScoresConsumer>
          {({ games }) => (
            <ul>
              {games.map((game) => (
                <li key={game.profile.gameId} data-testid="game">
                  {game.profile.gameId}
                </li>
              ))}
            </ul>
          )}
        </ScoresConsumer>
      </ScoresProvider>
    );

    expect(screen.findAllByTestId('game')).toBeDefined();
  });
});
