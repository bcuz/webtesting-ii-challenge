import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// replaces afterEach(rtl.cleanup);
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect';
import App from './App';

it('renders without crashing', () => {
  render(<App />)
});

it('default display of 0 balls, 0 strikes', () => {
  let { getByText, queryByText } = render(<App />)

  let strikes = queryByText(/strikes: 0/i)
  let balls = queryByText(/balls: 0/i)

  expect(strikes).toBeInTheDocument()
  expect(balls).toBeInTheDocument()
});

it('registers a strike', () => {
  let { getByText, queryByText } = render(<App />)

  let button = getByText(/\bstrike\b/i)

  fireEvent.click(button)

  let strikes = queryByText(/strikes: 1/i)

  expect(strikes).toBeInTheDocument()
});

it('strikes and balls reset to 0 at 3 strikes', () => {
  let { getByText, queryByText } = render(<App />)
  
  let button = getByText(/\bstrike\b/i)

  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)

  let strikes = queryByText(/strikes: 0/i)

  expect(strikes).toBeInTheDocument()
});