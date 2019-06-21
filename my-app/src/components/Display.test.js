import React from 'react';
import { render } from '@testing-library/react';
// replaces afterEach(rtl.cleanup);
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect';
import Display from './Display';

it('renders without crashing', () => {
  render(<Display />)
});