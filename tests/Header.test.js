/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../src/components';

describe('Tests Component Header', () => {
  it('renders a link to the source code', () => {
    const title = 'see the source code here';
    render(<Header title={title} />);
    const sourceLink = screen.getByText(/see the source code here/i);
    expect(sourceLink).toBeInTheDocument();
  });
});