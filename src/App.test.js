import { screen, render } from '@testing-library/react';
import App from './App';

describe('The main application', () => {
  it('should render the homepage', () => {
    render(<App />);
    const homePage = screen.getByTestId('home');
    expect(homePage).toBeInTheDocument();
  });
});
