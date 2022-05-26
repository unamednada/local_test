import { createElement } from 'react';

const projectText = [
  'A fun app to kill time',
  'Web app developed with HTML, CSS and JS vanilla. It\'s a sandbox app which allows you to create pixelated art with random colors. Deploy on repl.it with a nodejs + express server.',
];

const anchorChildren = [
  (createElement('img', { key: 0, src: './images/pixel-art.png', alt: 'project-preview' })),
  (createElement('hr')),
  (createElement('h4', { key: 1 }, projectText[0])),
  (createElement('p', { key: 2 }, projectText[1])),
];

const parentAnchor = createElement('a', {
  href: 'https://pixel-art.unamednada.repl.co/',
  target: '_blank',
  rel: 'noopener noreferrer',
}, anchorChildren);

const projects = [
  {
    title: 'Pixel Art',
    children: [parentAnchor],
    className: 'projects',
  },
];

export default projects;
