import { SWRConfiguration } from 'swr';

import type { GetScoresReq } from '../../api';

export interface UseFetchScore {
  readonly data: GetScoresReq;
  readonly config?: SWRConfiguration;
}
