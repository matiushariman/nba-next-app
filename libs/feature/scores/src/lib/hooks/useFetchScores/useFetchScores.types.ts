import { SWRConfiguration } from 'swr';

import type { FetchScoresReq } from '../../api';

export interface UseFetchScore {
  readonly data: FetchScoresReq;
  readonly config?: SWRConfiguration;
}
