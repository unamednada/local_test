import { render, screen } from '@testing-library/react';
import { Footer } from '../components';

describe('Tests Footer Component', () => {
  render(<Footer />);
  const footerContainer = screen.getByTestId('footer');

  it('should render the footer', () => {
    expect(footerContainer).toBeInTheDocument();
  });

  it('should have a left and right section', () => {
    expect(footerContainer.children.length).toBe(2);
    const [leftSection, rightSection] = footerContainer.children;
    expect(leftSection).toHaveClass('footer-left');
    expect(rightSection).toHaveClass('footer-right');
  });

  describe('The left section', () => {
    const [leftSection] = footerContainer.children;

    it('should have a navigation bar', () => {
      const navBar = leftSection.children[0];
      expect(navBar).toHaveClass('footer-nav');
    });

    describe('The navigation bar', () => {
      const navBar = leftSection.children[0];

      it('should have a link to the github profile', () => {      
        const gitLink = navBar.children[0];
        expect(gitLink).toHaveAttribute('href', 'https://github.com/unamednada/');
        expect(gitLink).toHaveAttribute('target', '_blank');
      });
  
      it('should have a link to the linkedin profile', () => {
        const linkedinLink = navBar.children[1];
        expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/unamednada/');
        expect(linkedinLink).toHaveAttribute('target', '_blank');
      });
    });
    });

  describe('The right section', () => {
    const [, rightSection] = footerContainer.children;

    it('should have a loving paragraph', () => {
      const lovingParagraph = rightSection.children[0];
      expect(lovingParagraph.tagName).toBe('P');
      expect(lovingParagraph).toHaveTextContent('Created with React, CSS3 and loads of coffee');
    });
  });
});
