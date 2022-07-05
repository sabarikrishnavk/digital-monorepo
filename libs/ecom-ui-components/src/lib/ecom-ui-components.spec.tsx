import { render } from '@testing-library/react';

import EcomUiComponents from './ecom-ui-components';

describe('EcomUiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EcomUiComponents />);
    expect(baseElement).toBeTruthy();
  });
});
