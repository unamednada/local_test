import { render, screen } from '@testing-library/react';
import { Banner } from '../components';

const bannerImgPath = '../../../public/banner.jpg';

describe('Tests Banner Component', () => {
  render(<Banner />);
  const bannerContainer = screen.getByTestId('banner');
  const bannerMain = bannerContainer.children[0];

  it('should render the banner', () => {
    expect(bannerContainer).toBeInTheDocument();
    expect(bannerMain).toBeInTheDocument();
  });

  it('should have a left and a right section', () => {
    expect(bannerMain.children.length).toBe(2);
    const [leftSection, rightSection] = bannerMain.children;
    expect(leftSection).toHaveClass('banner-main-left');
    expect(rightSection).toHaveClass('banner-main-right');
  });
});