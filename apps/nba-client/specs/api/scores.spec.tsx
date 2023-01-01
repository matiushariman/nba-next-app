import { renderHook, waitFor } from '@nba-app/test-utils';
import { SWRConfig } from 'swr';

import { useFetchScoresWithSWR } from '../../pages/api/scores';

const Wrapper = ({ children }) => (
  <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>
);
describe('useFetchScoresWithSWR', () => {
  it('should return scores response', async () => {
    const { result } = renderHook(
      () => useFetchScoresWithSWR({ data: { gameDate: '2022-12-25' } }),
      {
        wrapper: Wrapper,
      }
    );

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.data).toMatchSnapshot();
  });
});
