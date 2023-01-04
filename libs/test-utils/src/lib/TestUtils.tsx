import { FC, ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SWRConfig } from 'swr';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & { mode?: PaletteMode }
) => {
  const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
    const theme = createTheme({
      palette: {
        mode: options?.mode ?? 'light',
      },
    });

    return (
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>
        </LocalizationProvider>
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
