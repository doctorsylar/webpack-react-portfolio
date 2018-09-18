'use strict';
import $ from 'jquery';

// PureJS Section
// jQuery Section

$(function () {
    $('#menu-toggler').click(function () {
        $('nav.header-menu > ul').slideToggle("fast");
    });
    $('.anchor-link').click(function (event) {
        event.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 400);
    });
    $('.edu-container .text-container .edu-button').click(function (event) {
        let clicked = event.target;
        let clickedName = clicked.classList[0];
        let computedTextContainerName = clickedName + '-information';
        let computedOpenButtonName = clickedName + '-button-open';
        let computedCloseButtonName = clickedName + '-button-close';
        function toggleButtonClass() {
            let selector = $('.edu-container .text-container .edu-button[class~=' + computedOpenButtonName + ']');
            selector.toggleClass('curved-bottom');
            if (!clicked.classList.contains('curved-bottom') && !clicked.classList.contains('square-bottom')) {
                selector.toggleClass('square-bottom');
            }
            else if (clicked.classList.contains('curved-bottom') && clicked.classList.contains('square-bottom')) {
                selector.toggleClass('square-bottom');
            }
        }
        $('.edu-container .text-container .edu-information[class~=' + computedTextContainerName + ']').slideToggle('100ms');
        $('.edu-container .text-container .edu-button[class~=' + computedCloseButtonName + ']').slideToggle('100ms', 'linear');
        toggleButtonClass();
    });

    $(window).scroll(function () {
        let homeButton = $('#home');
        let scrollPos = window.pageYOffset;
        if (scrollPos > 200 &&
            window.getComputedStyle(homeButton[0]).display === 'none') {
            homeButton.fadeIn('slow');
        }
        else if (scrollPos < 200) {
            homeButton.fadeOut('fast');
        }
    });
});
