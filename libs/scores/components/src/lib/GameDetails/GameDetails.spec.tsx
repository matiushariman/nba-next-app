import { render } from '@testing-library/react';

import GameDetails from './GameDetails';

describe('GameDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameDetails />);
    expect(baseElement).toBeTruthy();
  });
});
