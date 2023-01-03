import { createContext } from 'react';

import type { ScoresContextProps } from './ScoresContext.types';

export const ScoresContext = createContext<ScoresContextProps>(
  {} as ScoresContextProps
);
