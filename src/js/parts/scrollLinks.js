import $ from "jquery";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
gsap.registerPlugin(ScrollToPlugin);

function init(){
    /*
        Scroll to top
    */
    $('#scroll-to-top').on('click', function(e){
        e.preventDefault();
        gsap.to(window, { duration: 1.5, scrollTo: 0, ease: "power4.inOut" });
    });


    /*
        Scroll to link
    */
    $("a[href^='#']").each(function(){
        $(this).on('click', function(event){
            event.preventDefault();
            var targetHref = $(this).attr('href');
            if (targetHref != '#') {
                let whereToScroll = $(targetHref).offset().top - 100;

                // TweenLite.to(window, 1.6, {scrollTo: whereToScroll, ease: Power4.easeInOut});
                gsap.to(window, { duration: 0.6, scrollTo: whereToScroll, ease: "power4.inOut" });
            }
        });
    });
}

export { init };
