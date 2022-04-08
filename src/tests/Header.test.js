import { render, screen } from '@testing-library/react';
import { Header } from '../components';

describe('Tests Header Component', () => {

  beforeEach(() => {
    render(<Header />);
  });

  it('should render the header', () => {
    const headerContainer = screen.getByTestId('header');
    expect(headerContainer).toBeInTheDocument();
  });

  it('should have a left and right section', () => {
    const headerContainer = screen.getByTestId('header');
    expect(headerContainer.children.length).toBe(2);
    const [leftSection, rightSection] = headerContainer.children;
    expect(leftSection).toHaveClass('header-left');
    expect(rightSection).toHaveClass('header-right');
  });

  it('should have a link to the github repo in the left section', () => {
    const headerContainer = screen.getByTestId('header');
    const [leftSection] = headerContainer.children;
    const repoLink = leftSection.children[0];
    expect(repoLink).toHaveAttribute('href', 'https://github.com/unamednada/unamednada.github.io');
    expect(repoLink).toHaveTextContent('see source code here');
  });
});
