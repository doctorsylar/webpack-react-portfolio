'use strict';
import $ from 'jquery';

// PureJS Section
// jQuery Section

$(function () {
    $('#menu-toggler').click(function () {
        $('nav.header-menu ul').slideToggle("fast");
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
            $('.edu-container .text-container .edu-button[class~=' + computedOpenButtonName + ']').toggleClass('curved-bottom');
        }
        $('.edu-container .text-container .edu-information[class~=' + computedTextContainerName + ']').slideToggle('100ms');
        $('.edu-container .text-container .edu-button[class~=' + computedCloseButtonName + ']').slideToggle('100ms', 'linear', toggleButtonClass);
    });

    $('form.contact-form').submit(function (event) {
        event.preventDefault();
        $('form.contact-form').hide('fast', 'linear', function () {
            $('h2.contact-decoy').show('slow');
        })
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
