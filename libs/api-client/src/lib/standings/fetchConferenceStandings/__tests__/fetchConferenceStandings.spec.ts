import { fetchConferenceStandings } from '../fetchConferenceStandings';

describe('fetchConferenceStandings', () => {
  it('should return only conference standings data', async () => {
    expect(await fetchConferenceStandings()).toMatchSnapshot();
  });
});
