$(document).ready(function () {
    $('.feat-container').each(function(){
        $(this).hover(
            function(){
                $('div.read-more', this).show();
                $('div', this).animate({
                    height: '12rem',
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

            if($(window).scrollTop() < ($('#services').offset().top - 200)){
                changeActiveMenu($('.nav-link.hero'));
            }else if($(window).scrollTop() < $('#featuredWork').offset().top - 200){
                changeActiveMenu($('.nav-link.services'));
            }else if($(window).scrollTop() < $('#aboutUs').offset().top - 200){
                changeActiveMenu($('.nav-link.featuredWork'));
            }else if($(window).scrollTop() < $('#getQuoteBox').offset().top - 200){
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

