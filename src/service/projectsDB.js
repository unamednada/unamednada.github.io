import { createElement } from 'react';
import { getData } from '../utils/APIRequest';

const projects = getData('/projects');

const createProject = (project) => {
  const {
    title,
    heading,
    description,
    image,
    href,
    sourceCode,
  } = project;

  const projectsText = [
    heading,
    description,
  ];

  const anchorChildren = [
    (createElement('img', { key: 0, src: image, alt: `${title}-preview` })),
    (createElement('hr')),
    (createElement('h4', { key: 1 }, projectsText[0])),
    (createElement('p', { key: 2 }, projectsText[1])),
  ];

  const parentAnchor = createElement('a', {
    href,
    target: '_blank',
    rel: 'noopener noreferrer',
  }, anchorChildren);

  const sourceCodeElement = createElement('a', {
    href: sourceCode,
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'source-code',
  }, 'source code');

  return {
    title,
    children: [parentAnchor, sourceCodeElement],
    className: 'projects',
  };
};

projectElements = projects.map(createProject);

export default projectElements;
