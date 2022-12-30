import { fetchScores } from '../fetchScores';

describe(fetchScores, () => {
  it('should return only games data', async () => {
    expect(
      await fetchScores('http://localhost/api/scores', {
        gameDate: '2022-12-25',
      })
    ).toMatchSnapshot();
  });
});
