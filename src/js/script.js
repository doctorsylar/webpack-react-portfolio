'use strict';

// PureJS
let toggleInformation =  function() {
    let blocks = document.getElementsByClassName('edu-information');
    console.log(blocks.length);
};
let eduButtons = document.getElementsByClassName('edu-button');
eduButtons.onclick(toggleInformation);

let menuToggler = document.getElementById('menu-toggler');
menuToggler.onclick = function () {
    let menuCont = document.querySelector('nav.header-menu');
    menuCont.classList.toggle('shown');
};

