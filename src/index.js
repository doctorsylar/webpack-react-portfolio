'use strict';
import style from './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import script from './js/script';
import './css/transitions.css';
import LimitedSkillsModule from './jsx/skills-module.jsx';

let skillsList = [
    { name: 'HTML 5',
        pictureUrl: 'https://www.w3.org/html/logo/downloads/HTML5_Badge.svg',
        categories: ['Basic'],
        description: 'HTML 5 desc'
    },
    { name: 'CSS 3',
        pictureUrl: './img/css-logo.svg',
        categories: ['Basic', 'CSS'],
        description: 'CSS 3 desc'
    },
    { name: 'JavaScript ES6',
        pictureUrl: 'http://2ality.com/2011/10/logo-js/js.jpg',
        categories: ['Basic', 'JavaScript'],
        description: 'JavaScript ES6 desc'
    },
    { name: 'Bootstrap 4',
        pictureUrl: 'https://dotnetnuke.nl/Portals/16/EasyDNNNews/18/600600p3764EDNmainbootstrap-social-logo.png',
        categories: ['CSS', 'Frameworks' ],
        description: 'Bootstrap 4 desc'
    },
    { name: 'React',
        pictureUrl: 'http://www2.cpttm.org.mo/training/logos/React.svg',
        categories: ['JavaScript', 'Frameworks'],
        description: 'React desc'
    },
    { name: 'VueJS',
        pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg',
        categories: ['JavaScript', 'Frameworks'],
        description: 'VueJS desc'
    },
    { name: 'PHP7',
        pictureUrl: './img/php.svg',
        categories: ['Server-side'],
        description: 'PHP7 desc'
    },
    { name: 'NodeJS',
        pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        categories: ['JavaScript', 'Server-side'],
        description: 'NodeJS desc'
    },
    { name: 'Webpack',
        pictureUrl: 'https://raw.githubusercontent.com/webpack/media/master/logo/icon.png',
        categories: ['Other'],
        description: 'Webpack desc'
    },
    { name: 'Babel',
        pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Babel_Logo.svg',
        categories: ['Other'],
        description: 'Babel desc'
    },
];

ReactDOM.render(<LimitedSkillsModule list={skillsList} />, document.getElementById('skills-container'));