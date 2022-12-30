import { createContext } from 'react';

import type { ColorModeContextProps } from './ColorModeContext.types';

export const ColorModeContext = createContext<ColorModeContextProps>(
  {} as ColorModeContextProps
);
