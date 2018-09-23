'use strict';
import style from './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import script from './js/script';
import './css/transitions.css';
import 'owl.carousel2/dist/assets/owl.carousel.css';
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
        pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
        categories: ['Basic', 'JavaScript'],
        description: 'JavaScript ES6 desc'
    },
    { name: 'jQuery',
        pictureUrl: './img/jquery.svg',
        categories: ['JavaScript'],
        description: 'jQuery desc'
    },
    { name: 'Bootstrap 4',
        pictureUrl: './img/bootstrap.svg',
        categories: ['CSS', 'Frameworks'],
        description: 'Bootstrap 4 desc'
    },
    { name: 'React',
        pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
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
        pictureUrl: './img/webpack.svg',
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