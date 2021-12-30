/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import { BasicButtonTest } from './button-test.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicButtonTest />);
  const rendered = getByText('hello from ButtonTest');
  expect(rendered).toBeTruthy();
});

