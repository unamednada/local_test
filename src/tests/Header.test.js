import { render, screen } from '@testing-library/react';
import { Header } from '../components';

describe('Tests Header Component', () => {
  it('should render the header', () => {
    render(<Header />);
    const headerContainer = screen.getByTestId('header');
    expect(headerContainer).toBeInTheDocument();
  });
});
