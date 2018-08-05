'use strict';
import style from './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import script from './js/script';
import LimitedSkillsModule from './jsx/skills-module.jsx';

let skillsList = [
    { name: 'HTML 5', pictureUrl: 'https://www.w3.org/html/logo/downloads/HTML5_Badge.svg', categories: ['Basic'] },
    { name: 'CSS 3', pictureUrl: './img/css-logo.png', categories: ['Basic', 'CSS'] },
    { name: 'JavaScript ES6', pictureUrl: 'http://2ality.com/2011/10/logo-js/js.jpg', categories: ['Basic', 'JavaScript'] },
    { name: 'Bootstrap 4', pictureUrl: 'https://dotnetnuke.nl/Portals/16/EasyDNNNews/18/600600p3764EDNmainbootstrap-social-logo.png', categories: ['CSS', 'JavaScript', 'Frameworks' ] },
    { name: 'React', pictureUrl: 'http://www2.cpttm.org.mo/training/logos/React.svg', categories: ['JavaScript', 'Frameworks'] },
    { name: 'VueJS', pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg', categories: ['JavaScript', 'Frameworks'] },
    { name: 'Webpack', pictureUrl: 'https://raw.githubusercontent.com/webpack/media/master/logo/icon.png', categories: ['Other'] },
    { name: 'Babel', pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Babel_Logo.svg', categories: ['Other'] },
];

ReactDOM.render(<LimitedSkillsModule list={skillsList} />, document.getElementById('skills-container'));