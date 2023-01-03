import { render, screen } from '@nba-app/test-utils';
import { ScoresProvider, GamesConsumer } from '../ScoresProvider';

describe('GameContext', () => {
  it('should fetch games data from API', async () => {
    render(
      <ScoresProvider
        gameDate="2022-12-25"
        initialValues={{
          games: [],
        }}
      >
        <GamesConsumer>
          {({ games }) => (
            <ul>
              {games.map((game) => (
                <li key={game.profile.gameId} data-testid="game">
                  {game.profile.gameId}
                </li>
              ))}
            </ul>
          )}
        </GamesConsumer>
      </ScoresProvider>
    );

    expect(screen.findAllByTestId('game')).toBeDefined();
  });
});
