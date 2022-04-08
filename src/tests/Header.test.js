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
    expect(repoLink).toHaveAttribute('target', '_blank');
  });

  it('should have a navigation bar in the right section', () => {
    const headerContainer = screen.getByTestId('header');
    const [, rightSection] = headerContainer.children;
    const navBar = rightSection.children[0];
    expect(navBar).toHaveClass('header-nav');
  });

  it('should have navigation links in the nav bar', () => {
    const headerContainer = screen.getByTestId('header');
    const [, rightSection] = headerContainer.children;
    const navBar = rightSection.children[0];
    expect(navBar.children.length).toBe(3);
    const [aboutLink, projectsLink, homeLink] = navBar.children;
    expect(aboutLink).toHaveTextContent('about');
    expect(projectsLink).toHaveTextContent('projects');
    expect(homeLink).toHaveTextContent('home');
  });

  it('should have a link to the about page in the nav bar', () => {
    const headerContainer = screen.getByTestId('header');
    const [, rightSection] = headerContainer.children;
    const navBar = rightSection.children[0];
    const aboutLink = navBar.children[0];
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  it('should have a link to the projects page in the nav bar', () => {
    const headerContainer = screen.getByTestId('header');
    const [, rightSection] = headerContainer.children;
    const navBar = rightSection.children[0];
    const projectsLink = navBar.children[1];
    expect(projectsLink).toHaveAttribute('href', '/projects');
  });

  it('should have a link to the home page in the nav bar', () => {
    const headerContainer = screen.getByTestId('header');
    const [, rightSection] = headerContainer.children;
    const navBar = rightSection.children[0];
    const homeLink = navBar.children[2];
    expect(homeLink).toHaveAttribute('href', '/');
  });
});
