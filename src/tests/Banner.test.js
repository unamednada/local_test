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
    expect(bannerMain.children.length).toBe(3);
    const [leftSection, , rightSection] = bannerMain.children;
    expect(leftSection).toHaveClass('banner-main-left');
    expect(rightSection).toHaveClass('banner-main-right');
  });

  it('should render a profile image', () => {
    const [, img, ] = bannerMain.children;
    expect(img).toHaveAttribute('src', './images/profile.jpg');
    expect(img).toHaveAttribute('alt', 'profile');
  });

  describe('The left section', () => {
    const [leftSection] = bannerMain.children;
    
    it('should have a title', () => {
      const title = leftSection.children[0];
      expect(title.tagName).toBe('H1');
      expect(title).toHaveTextContent('Welcome, friend');
    });

    it('should render a paragraph', () => {
      const paragraph = leftSection.children[1];
      expect(paragraph.tagName).toBe('P');
      expect(paragraph.textContent.includes('Gustavo')).toBe(true);
    });
  });

  describe('The right section', () => {
    const [, , rightSection] = bannerMain.children;

    it('should render a heading and 2 paragraphs separated by a horizontal line', () => {
      expect(rightSection.children.length).toBe(4);
    });

    it('should have a smaller heading', () => {
      const heading = rightSection.children[0];
      expect(heading.tagName).toBe('H2');
      expect(heading).toHaveTextContent('about me');
    });

    it('should render two paragraphs', () => {
      const [, paragraph1, , paragraph2] = rightSection.children;
      expect(paragraph1.tagName).toBe('P');
      expect(paragraph2.tagName).toBe('P');
    });
  });
});