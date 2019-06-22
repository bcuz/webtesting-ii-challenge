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

  // using \b to make sure it doesnt select strikes
  let button = getByText(/\bstrike\b/i)

  fireEvent.click(button)

  let strikes = queryByText(/strikes: 1/i)

  expect(strikes).toBeInTheDocument()
});

it('strikes and balls reset to 0 at 3 strikes', () => {
  let { getByText, queryByText } = render(<App />)
  
  let button = getByText(/\bstrike\b/i)
  let button1 = getByText(/\bball\b/i)

  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button1)
  fireEvent.click(button)

  let strikes = queryByText(/strikes: 0/i)
  let balls = queryByText(/balls: 0/i)

  expect(strikes).toBeInTheDocument()
  expect(balls).toBeInTheDocument()
});

it('registers a ball', () => {
  let { getByText, queryByText } = render(<App />)

  let button = getByText(/\bball\b/i)

  fireEvent.click(button)

  let balls = queryByText(/balls: 1/i)

  expect(balls).toBeInTheDocument()
});

it('strikes and balls reset to 0 at 4 balls', () => {
  let { getByText, queryByText } = render(<App />)
  
  let buttonStrike = getByText(/\bstrike\b/i)
  let buttonBall = getByText(/\bball\b/i)

  fireEvent.click(buttonStrike)
  fireEvent.click(buttonStrike)
  fireEvent.click(buttonBall)
  fireEvent.click(buttonBall)
  fireEvent.click(buttonBall)
  fireEvent.click(buttonBall)

  let strikes = queryByText(/strikes: 0/i)
  let balls = queryByText(/balls: 0/i)

  expect(strikes).toBeInTheDocument()
  expect(balls).toBeInTheDocument()
});

it('strikes and balls reset on a hit', () => {
  let { getByText, queryByText } = render(<App />)
  
  let buttonStrike = getByText(/\bstrike\b/i)
  let buttonBall = getByText(/\bball\b/i)
  let buttonHit = getByText(/\bhit\b/i)

  fireEvent.click(buttonStrike)
  fireEvent.click(buttonStrike)
  fireEvent.click(buttonBall)
  fireEvent.click(buttonBall)
  fireEvent.click(buttonBall)
  fireEvent.click(buttonHit)

  let strikes = queryByText(/strikes: 0/i)
  let balls = queryByText(/balls: 0/i)

  expect(strikes).toBeInTheDocument()
  expect(balls).toBeInTheDocument()
});

it('registers a foul', () => {
  let { getByText, queryByText } = render(<App />)

  let button = getByText(/\bfoul\b/i)

  fireEvent.click(button)

  let strikes = queryByText(/strikes: 2/i)

  expect(strikes).toBeInTheDocument()
});

it('foul doesnt increase strikes past 2', () => {
  let { getByText, queryByText } = render(<App />)

  let button = getByText(/\bfoul\b/i)

  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)

  let strikes = queryByText(/strikes: 2/i)

  expect(strikes).toBeInTheDocument()
});