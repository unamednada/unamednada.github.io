import { render, screen } from '@testing-library/react';
import { Header } from '../components';

describe('Tests Header Component', () => {
  render(<Header />);
  const headerContainer = screen.getByTestId('header');

  it('should render the header', () => {
    expect(headerContainer).toBeInTheDocument();
  });

  it('should have a left and right section', () => {
    expect(headerContainer.children.length).toBe(2);
    const [leftSection, rightSection] = headerContainer.children;
    expect(leftSection).toHaveClass('header-left');
    expect(rightSection).toHaveClass('header-right');
  });

  describe('The left section', () => {
    it('should have a link to the github repo', () => {
      const [leftSection] = headerContainer.children;
      const repoLink = leftSection.children[0];
      expect(repoLink).toHaveAttribute('href', 'https://github.com/unamednada/unamednada.github.io');
      expect(repoLink).toHaveTextContent('see source code here');
      expect(repoLink).toHaveAttribute('target', '_blank');
    });
  });

  describe('The right section', () => {
    const [, rightSection] = headerContainer.children;

    it('should have a navigation bar', () => {
      const navBar = rightSection.children[0];
      expect(navBar).toHaveClass('header-nav');
    });

    describe('The navigation bar', () => {
      const navBar = rightSection.children[0];
      const NAV_LENGTH = 3;

      it('should have navigation links', () => {
        expect(navBar.children.length).toBe(NAV_LENGTH);
        const [homeLink, projectsLink, aboutLink] = navBar.children;
        expect(homeLink).toHaveTextContent('home');
        expect(projectsLink).toHaveTextContent('projects');
        expect(aboutLink).toHaveTextContent('contact');
      });

      it('should have a link to the home page', () => {
        const homeLink = navBar.children[0];
        expect(homeLink).toHaveAttribute('href', '/');
      });

      it('should have a link to the projects page', () => {
        const projectsLink = navBar.children[1];
        expect(projectsLink).toHaveAttribute('href', '/projects');
      });

      it('should have a link to the about page', () => {
        const aboutLink = navBar.children[2];
        expect(aboutLink).toHaveAttribute('href', '/contact');
      });
    });
  });
});
