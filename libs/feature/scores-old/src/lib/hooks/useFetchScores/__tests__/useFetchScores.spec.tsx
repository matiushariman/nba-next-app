import { renderHook, waitFor } from '@nba-app/scores-test-utils';
import { SWRConfig } from 'swr';

import useFetchScores from '../useFetchScores';

import type { ReactNode } from 'react';

const wrapper = ({ children }: { children?: ReactNode }) => (
  <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>
);

describe('useFetchScores', () => {
  it('should return scores response', async () => {
    const { result } = renderHook(
      () => useFetchScores({ data: { gameDate: '2022-12-25' } }),
      { wrapper }
    );

    await waitFor(() => expect(result.current.isLoading).toEqual(false));

    expect(result.current.data).toBeDefined();
    expect(result.current.data).toMatchSnapshot();
  });
});
