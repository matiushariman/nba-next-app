import { setupServer } from 'msw/node';

import { standingsHandlers } from '@nba-app/feature-standings';

export const server = setupServer(...standingsHandlers);
