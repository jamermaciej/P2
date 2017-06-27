 // Animacja scrolla, dodanie hash do adresu

 		$(function($) {
			$('a[href^="#"]').click(function (e) {
				e.preventDefault(); 
				var target = $(this).attr('href'); 
				$('body,html').animate({
					scrollTop: $(target).offset().top, 
				}, 1000);
				// location.hash = target;
				$('.navbar-collapse').collapse('hide'); 
				$('.navbar-toggle').removeClass('active'); 
			});
		});

/* Hamburger menu */

		$(function() { 
			$(".navbar-toggle").on("click", function () {
    		$(this).toggleClass("active");
			});
		});

/* Scroll spy */
		
    // $(function () {
    //     var sectionsToWatch = [];
    //     var menuItems = $('.navbar-right').eq(0).find('li');
    //     $(menuItems).each(function () {          sectionsToWatch.push($(this).find('a').attr('href').replace('#', ''));
    //     });
 
    //     $(document).scroll(function () {
    //         var $nav = $(".navbar-fixed-top");
    //         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
 
    //         var scrollTopOffset = $(document).scrollTop();
 
    //         $(sectionsToWatch).each(function (k, v) {
    //             if ($('#' + v).length && scrollTopOffset >= $('#' + v).offset().top - $('.navbar-fixed-top').height()) {
    //                 $('.navbar-right li').removeClass('active');
    //                 var x = $('.navbar-right li').find('a[href="#' + v + '"]');
    //                 x.parent('li').addClass('active');
    //             }
    //         }); 
    //     });
    // });


    $(document).ready(function() {
    $().fancybox({

    });
});

// var viewMoreGallery = document.querySelector('.viewMoreGallery');

// viewMoreGallery.addEventListener('click', function(){
//     var hidden = document.querySelector('.hidden-content-gallery');
//     hidden.hide('hidden');

// }, false);

$(document).ready(function(){
    $('.viewMoreGallery').click(function(event){
        $('.hidden-content-gallery').slideToggle();
        $(".viewMoreGallery").html($(this).text() == 'show less' ? 'view more' : 'show less');
    });
});
$(document).ready(function(){
    $('.viewMoreBlog').click(function(event){
        $('.hidden-content-blog').slideToggle();
         $(".viewMoreBlog").html($(this).text() == 'show less' ? 'view more' : 'show less');
    });

});

