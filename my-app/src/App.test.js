import React from 'react';
import { render } from '@testing-library/react';
// replaces afterEach(rtl.cleanup);
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect';
import App from './App';

it('renders without crashing', () => {
  render(<App />)
});

it('display default message with 0 balls, 0 strikes', () => {
  let { getByText, queryByText } = render(<App />)

  let message = queryByText(/play ball/i)

  expect(message).toBeInTheDocument()
});

// it('starts with 0 balls, 0 strikes', () => {
//   let { getByText, queryByText } = render(<App />)

//   let balls = queryByText(/balls: 0/i)

//   expect(balls).toBeInTheDocument()
// });