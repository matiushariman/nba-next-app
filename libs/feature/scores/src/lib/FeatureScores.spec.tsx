import { render } from '@testing-library/react';

import FeatureScores from './FeatureScores';

describe('FeatureScores', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureScores />);
    expect(baseElement).toBeTruthy();
  });
});
