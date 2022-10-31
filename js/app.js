$(document).ready(function () {
    $('.feat-container').each(function(){
        $(this).hover(
            function(){
                $('div.read-more', this).show();
                $('div', this).animate({
                    height: '11rem',
                }, 50);
            },
            function(){
                $('div.read-more', this).hide();
                $('div', this).animate({
                    height: '10rem',
                }, 50);
            }
        );
    });

    $(".toTop").click(function () {
        this.scrollTo = 0;
    });

    let count = 0;
    $(window).scroll(function(){
        if($('#hero').html() != undefined){
            if(isVisible($('#counts')) && count == 0){
                $('.count-num').each(function () {
                    count++;
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }

            if($(window).scrollTop() < ($('#services').offset().top - 120)){
                changeActiveMenu($('.nav-link.hero'));
            }else if($(window).scrollTop() < $('#featuredWork').offset().top - 120){
                changeActiveMenu($('.nav-link.services'));
            }else if($(window).scrollTop() < $('#aboutUs').offset().top - 120){
                changeActiveMenu($('.nav-link.featuredWork'));
            }else if($(window).scrollTop() < $('#getQuoteBox').offset().top - 160){
                changeActiveMenu($('.nav-link.aboutUs'));
            }else{
                $('.active-menu').removeClass('active-menu');
            }

        }
    });

    $("input").change(()=>{
        console.log('Change1', $(this).val());

        if($(this).val() != ''){
            console.log('Change');
            $(this).removeClass('error');
        }
    });

    // $('.navbar-brand a').click(function(e){
    //     e.preventDefault();
    //     window.scrollTo(0, 0);
    // })
    $('.toFooter').click(function(e){
        e.preventDefault();
        scrollToElement($('#getQuoteBox'), 150);
    });
    $('.nav-item a:not(.blog):not(.btn)').click(function(e){
        e.preventDefault();
        scrollToElement($(`#${$(this).attr('href')}`), 100);
    });
    $('#servicesShowMoreBtn').click(function(e){
        e.preventDefault();
        if($(this).html() == 'View Less'){
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#services").offset().top - 100
            }, 500);
        }
        // $('.service-container.collapse').collapse('toggle');
        $(this).attr('href', ($(this).attr('href') == '#moreService')? '#serviceDefault' : '#moreService');
        $(this).html(($(this).html() == 'View More')? 'View Less':'View More');

    });

    function scrollToElement($el, $offset){
        window.scrollTo(0, $el.offset().top - $offset);
    }
    function isVisible($el) {
        const winTop = $(window).scrollTop();
        const winBottom = winTop + $(window).height();
        const elTop = $el.offset().top;
        const elBottom = elTop + $el.height();
        return ((elBottom <= winBottom) && (elTop >= winTop));
    }
    function changeActiveMenu(e){
        $('.active-menu').removeClass('active-menu');
        e.parent().addClass('active-menu');
    }
});

