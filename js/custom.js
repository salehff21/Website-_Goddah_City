/*global $, alert, console*/

$(function() {

    'use strict';

    //adjust header height
    var myHeader = $('.header');
    var mySlider = $('.bxslider');

    myHeader.height($(window).height());

    $(window).resize(function(){
        myHeader.height($(window).height());

        //Make List Item Center
        mySlider.each(function(){
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        });
    });

    // Links add active Class
    $('.links li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    });

    //Make List Item Center
    mySlider.each(function(){
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });

    // Triger The Slider
    mySlider.bxSlider({
        pager: false
    });

    // Smooth Scroll To spicefic position
    $('.ser').click(function() {
        $('html, body').animate({
            scrollTop: $('#services').offset().top
        }, 1000);
    });
});