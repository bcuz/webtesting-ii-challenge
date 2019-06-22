import React from 'react';
import { render } from '@testing-library/react';
// replaces afterEach(rtl.cleanup);
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect';
import Display from './Display';

it('renders without crashing', () => {
  render(<Display />)
});

it('default display of 0 balls, 0 strikes', () => {
  let { getByText, queryByText } = render(<Display />)

  let strikes = queryByText(/strikes: 0/i)
  let balls = queryByText(/balls: 0/i)

  expect(strikes).toBeInTheDocument()
  expect(balls).toBeInTheDocument()
});