import React from 'react';
import { render } from '@testing-library/react';
// replaces afterEach(rtl.cleanup);
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect';
import Display from './Display';

it('renders without crashing', () => {
  render(<Display />)
});

it('display default message with 0 balls, 0 strikes', () => {
  let { getByText, queryByText } = render(<Display />)

  let message = queryByText(/play ball/i)

  expect(message).toBeInTheDocument()
});