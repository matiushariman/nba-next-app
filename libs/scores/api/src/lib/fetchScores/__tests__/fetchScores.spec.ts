import fetchScores from '../fetchScores';

describe('fetchScores', () => {
  it('should return scores response', async () => {
    const res = await fetchScores({ gameDate: '2022-12-25' });

    expect(res).toBeDefined();
    expect(res).toMatchSnapshot();
  });
});
