import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

it('registers a strike', () => {
  let { getByText, queryByText } = render(<App />)
  
  let button = getByText(/strike/i)

  fireEvent.click(button)

  let strikes = queryByText(/strikes: 1/i)

  expect(strikes).toBeInTheDocument()
});