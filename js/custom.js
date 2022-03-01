/* global $ */
$(document).ready(function () {
    "use strict";
    $(".nav ul.nav-bar li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
   /* $(".nav ul.nav-bar li").click(function () {
        $("html, bodt").animate({
            "scrollTop": $($.attr(this, 'href')).offset().top
        }, 2000);
    });*/
    
    $(".nav ul.nav-bar li a").click(function () {
		$("html, body").animate({
			scrollTop : $("#" + $(this).data("vale")).offset().top
		}, 2000);
	});
    
    $(".header-navbar .icon-nav").click(function () {
        $(".nav ul.nav-bar").toggleClass("hidden-sm").toggleClass("hidden-xs");
    });
    
    $(".Information ul li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".Information .info-content > div").hide();
        $($(this).data("vale")).fadeIn();
    });
});