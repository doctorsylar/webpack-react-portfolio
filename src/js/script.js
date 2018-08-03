'use strict';
import $ from 'jquery';

// PureJS Section

// let menuToggler = document.getElementById('menu-toggler');
// menuToggler.onclick = function() {
//     let menuCont = document.querySelector('nav.header-menu');
//     menuCont.classList.toggle('shown');
// };


// jQuery Section

$(function () {
    $('#menu-toggler').click(function () {
        $('nav.header-menu').slideToggle("fast");
    });
    $('.anchor-link').click(function (event) {
        event.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 400);
    });
    $('.edu-container .text-container .edu-button').click(function (event) {
        let clickedName = event.target.innerText.toLowerCase();
        let educations = $('.edu-information');
        let computedClassName = clickedName + '-information';
        $('.edu-container .text-container .edu-information[class~=' + computedClassName + ']').slideToggle('500ms');
    });
});
