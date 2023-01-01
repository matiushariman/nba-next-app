import { render, screen } from '@nba-app/test-utils';
import { GamesProvider, GamesConsumer } from '../GamesProvider';

describe('GameContext', () => {
  it('should fetch games data from API', async () => {
    render(
      <GamesProvider
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
      </GamesProvider>
    );

    expect(screen.findAllByTestId('game')).toBeDefined();
  });
});
