import { render } from '@testing-library/react';

import ScoresFeature from './ScoresFeature';

describe('ScoresFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScoresFeature />);
    expect(baseElement).toBeTruthy();
  });
});
