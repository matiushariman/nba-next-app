import { setupServer } from 'msw/node';

import { handlers as scoresHandlers } from '@nba-app/feature-scores';
import { standingsHandlers } from '@nba-app/feature-standings';

export const server = setupServer(...scoresHandlers, ...standingsHandlers);
