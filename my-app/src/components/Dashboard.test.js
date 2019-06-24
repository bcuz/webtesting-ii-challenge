import React from 'react';
import { render } from '@testing-library/react';
// replaces afterEach(rtl.cleanup);
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

it('renders without crashing', () => {
  render(<Dashboard />)
});

it('displays buttons needed', () => {
  let { getByText } = render(<Dashboard />)

  let strike = getByText(/strike/i)
  let ball = getByText(/ball/i)
  let foul = getByText(/foul/i)
  let hit = getByText(/hit/i)

});