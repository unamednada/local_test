import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../src/components';

test('renders learn react link', () => {
  render(<Header />);
  const sourceLink = screen.getByText(/see the source code here/i);
  expect(linkElement).toBeInTheDocument();
});