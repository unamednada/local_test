import { screen, render } from '@testing-library/react';
import App from './App';

describe('The main application', () => {
  it('should render the header', () => {
    render(<App />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
});
