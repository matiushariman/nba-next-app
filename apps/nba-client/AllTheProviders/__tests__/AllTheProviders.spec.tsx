import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ColorModeContext } from '@nba-app/ui';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { AllTheProviders } from '../AllTheProviders';

const Children = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <div>
      <p>{theme.palette.mode} mode</p>
      <button onClick={colorMode.toggleColorMode}>Toggle mode</button>
    </div>
  );
};

describe(AllTheProviders, () => {
  it('should enable user to update color mode', async () => {
    render(
      <AllTheProviders>
        <Children />
      </AllTheProviders>
    );

    expect(screen.getByText('light mode')).toBeVisible();

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByText('dark mode')).toBeVisible();
  });
});
