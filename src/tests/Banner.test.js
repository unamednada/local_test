import { render, screen } from '@testing-library/react';
import { Banner } from '../components';

const bannerImgPath = '../../../public/banner.jpg';

describe('Tests Banner Component', () => {
  render(<Banner />);
  const bannerContainer = screen.getByTestId('banner');

  it('should render the banner', () => {
    expect(bannerContainer).toBeInTheDocument();
  });
});