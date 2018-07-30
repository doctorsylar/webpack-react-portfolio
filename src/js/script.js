'use strict';
import 'jquery';

// PureJS
let menuToggler = document.getElementById('menu-toggler');
menuToggler.onclick = function () {
    let menuCont = document.querySelector('nav.header-menu');
    menuCont.classList.toggle('shown');
};

// jQuery
