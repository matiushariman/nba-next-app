import { setupServer } from 'msw/node';

import { scoresHandlers } from '@nba-app/feature-scores';
import { standingsHandlers } from '@nba-app/feature-standings';

export const server = setupServer(...scoresHandlers, ...standingsHandlers);
