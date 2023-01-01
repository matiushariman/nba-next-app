import { createContext } from 'react';

import type { GamesContextProps } from './GamesContext.types';

export const GamesContext = createContext<GamesContextProps>(
  {} as GamesContextProps
);
