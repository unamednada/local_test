import { screen, render } from '@testing-library/react';
import { Home } from '../pages';

describe('The home page', () => {
  it('should render the header', () => {
    render(<Home />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('should render the footer', () => {
    render(<Home />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  it('should render the home page', () => {
    render(<Home />);
    const homePage = screen.getByTestId('banner');
    expect(homePage).toBeInTheDocument();
  });
});
