import { createContext } from 'react';

export interface ColorModeContextProps {
  toggleColorMode(): void;
}

const ColorModeContext = createContext<ColorModeContextProps>(
  {} as ColorModeContextProps
);

export default ColorModeContext;
