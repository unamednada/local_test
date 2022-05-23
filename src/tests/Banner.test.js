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

  describe('The left section', () => {
    const [leftSection] = bannerMain.children;
    
    it('should have a title', () => {
      const title = leftSection.children[0];
      expect(title.tagName).toBe('H1');
      expect(title).toHaveTextContent('Under construction...');
    });
  });

  describe('The right section', () => {
    const [, rightSection] = bannerMain.children;

    it('should have a smaller heading', () => {
      const heading = rightSection.children[0];
      expect(heading.tagName).toBe('H2');
      expect(heading).toHaveTextContent('RIGHT!');
    });
  });
});