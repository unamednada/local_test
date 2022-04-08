import { render, screen } from '@testing-library/react';
import { Header } from '../components';

describe('Tests Header Component', () => {
  it('should render the header', () => {
    render(<Header />);
    const headerContainer = screen.getByTestId('header');
    expect(headerContainer).toBeInTheDocument();
  });

  it('should have a left and right section', () => {
    render(<Header />);
    const headerContainer = screen.getByTestId('header');
    expect(headerContainer.children.length).toBe(2);
    const [leftSection, rightSection] = headerContainer.children;
    expect(leftSection).toHaveClass('header-left');
    expect(rightSection).toHaveClass('header-right');
  });
});
