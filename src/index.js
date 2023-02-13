// littlefoot - footnotes
import littlefoot from 'littlefoot'
//import 'littlefoot/dist/littlefoot.css'

littlefoot({
    buttonTemplate: '<button aria-label="Footnote <% number %>" class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>" /> <% number %> </button>',
    //anchorPattern: '/(fn|footnote|note)[:\-_\d]/gi',
})

// Prepends "#lf-"" to  footnote's link to anchor, to match Littlefoot's button
$('a.footnote-backref').each(function() {
    var href = $(this).attr('href');
    if( !/^\#lf-/.test(href) ) {
        var newhref = href.replace(/#/, "#lf-");
        $(this).attr('href',newhref);

        location.href = href;
    }
});
// Makes sure anchor links do not open new tab
$("body").on("click", "a.footnote-backref[data-href]", function() {
    var href = $(this).data("href");
    if (href) {
        location.href = href;
    }
});



// key navigation
import keyNavigation from './keyNavigation'

keyNavigation.init();



// $(window).on('resize scroll', function() {
//     $('.sticky').each(function() {
//         if( $(this).isInViewport() ) {
//             console.log('making '+$(this).attr('id')+' visible');
//             $(this).removeClass("disabled");
//             $(this).siblings().addClass("disabled");
//         }
//     });
// });


$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


// var stickyElements = document.getElementsByClassName('sticky');

// for (var i = stickyElements.length - 1; i >= 0; i--) {
//     Stickyfill.add(stickyElements[i]);
// }