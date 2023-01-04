import { FC, ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & { mode?: PaletteMode }
) => {
  const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: options?.mode ?? 'light',
        },
      })}
    >
      {children}
    </ThemeProvider>
  );

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
