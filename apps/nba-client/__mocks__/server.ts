import { setupServer } from 'msw/node';

import { scoresHandlers } from '@nba-app/feature-scores-old';
import { standingsHandlers } from '@nba-app/feature-standings';

export const server = setupServer(...scoresHandlers, ...standingsHandlers);
