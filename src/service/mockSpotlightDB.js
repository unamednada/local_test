import { createElement } from 'react';
import { Email } from '../components';

const aboutMeText = [
  'A soon to be fullstack developer with a background in systems\'. I\'m currently studying Systems\' Analysis and Development at University. I love coding and my most recent professional experiences have been with the development of web applications.',
  'With my experience in systems\', I\'ve been able to work with a wide range of technologies, from frontend to backend. I\'m also familiar with the use of databases and cloud computing.',
];

const aboutMe = {
  title: 'about me',
  children: [
    (createElement('p', { key: 0 }, aboutMeText[0])),
    (createElement('hr')),
    (createElement('p', { key: 1 }, aboutMeText[1])),
  ],
  className: 'about',
};

const projectsText = [
  'Pixel Art',
  'Web app developed with HTML, CSS and JS vanilla. It\'s a sandbox app which allows you to create pixelated art with random colors. Deploy on repl.it with a nodejs + express server.',
];

const anchorChildren = [
  (createElement('img', { key: 0, src: './images/pixel-art.png', alt: 'project-preview' })),
  (createElement('hr')),
  (createElement('h4', { key: 1 }, projectsText[0])),
  (createElement('p', { key: 2 }, projectsText[1])),
];

const parentAnchor = createElement('a', {
  href: 'https://pixel-art.unamednada.repl.co/',
  target: '_blank',
  rel: 'noopener noreferrer',
}, anchorChildren);

const projects = {
  title: 'spotlight',
  children: [parentAnchor],
  className: 'projects',
};

const navAnchorText = [
  'click here to see more!',
  'here to contact me',
];

const nav = {
  title: 'like what you see?',
  children: [
    (createElement('a', { key: 0, href: '#/projects' }, navAnchorText[0])),
    (createElement('h4', { key: 1, id: 'or' }, 'or')),
    (createElement('a', { key: 2, href: '#/contact' }, navAnchorText[1])),
  ],
  className: 'nav',
};

const meetingContentChildren = [
  (<Email key={ 0 } />),
  (createElement('h4', { key: 0 }, 'if the button above doesn\'t work, copy my email here:')),
];

const meeting = {
  title: 'mail me',
  children: [
    createElement('div', { key: 0, className: 'meeting-content' }, meetingContentChildren),
  ],
  className: 'meet-card',
};

export {
  aboutMe,
  projects,
  nav,
  meeting,
};
