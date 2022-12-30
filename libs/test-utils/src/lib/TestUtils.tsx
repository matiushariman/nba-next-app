import { FC, ReactElement, ReactNode, useMemo, useState } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { ColorModeContext } from '@nba-app/ui-old';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SWRConfig } from 'swr';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & { mode?: PaletteMode }
) => {
  const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<PaletteMode>(options?.mode ?? 'light');

    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      []
    );

    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode]
    );

    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>
          </LocalizationProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
