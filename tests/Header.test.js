/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../src/components';

describe('Tests Component Header', () => {
  const title = 'see the source code here';
  it('renders a link to the source code', () => {
    render(<Header title={title} />);
    const sourceLink = screen.getByText(/see the source code here/i);
    expect(sourceLink).toBeInTheDocument();
  });

  it('renders a navigation bar', () => {
    render(<Header title={title} />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('contains links to home, projects and about', () => {
    render(<Header title={title} />);
    const homeLink = screen.getByText(/home/i);
    const projectsLink = screen.getByText(/projects/i);
    const aboutLink = screen.getByText(/about/i);
    expect(homeLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
});