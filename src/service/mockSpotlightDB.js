import { createElement } from 'react';

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

export {
  aboutMeText,
  aboutMe,
};
