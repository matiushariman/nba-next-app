import { render } from '@testing-library/react';

import Scoreboard from './Scoreboard';

describe('Scoreboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Scoreboard />);
    expect(baseElement).toBeTruthy();
  });
});
