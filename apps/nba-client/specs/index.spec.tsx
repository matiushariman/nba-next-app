import React from 'react';
import { render } from '@nba-app/test-utils';

import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index games={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
