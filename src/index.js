'use strict';
import style from './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import script from './js/script';
import LimitedSkillsModule from './jsx/skills-module.jsx';

let skillsList = [
    { name: 'React', pictureUrl: 'http://www2.cpttm.org.mo/training/logos/React.svg', categories: ['JavaScript', 'Frameworks'] },
    { name: 'React1', pictureUrl: 'http://www2.cpttm.org.mo/training/logos/React.svg', categories: ['JavaScript', 'Frameworks'] },
    { name: 'React2', pictureUrl: 'http://www2.cpttm.org.mo/training/logos/React.svg', categories: ['JavaScript'] },
    { name: 'React3', pictureUrl: 'http://www2.cpttm.org.mo/training/logos/React.svg', categories: ['Frameworks'] },
];

ReactDOM.render(<LimitedSkillsModule list={skillsList} />, document.getElementById('skills-container'));