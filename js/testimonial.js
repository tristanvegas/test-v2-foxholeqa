$(document).ready(()=>{

    let timer = setInterval(()=>{
        testimonialNext();
    }, 5000);

    $(".testimonial-prev").click(function () {
        testimonialPrev();

        clearInterval(timer);
        timer = setInterval(()=>{
            testimonialNext();
        }, 5000);
    });
    $(".testimonial-next").click(function () {
        testimonialNext();

        clearInterval(timer);
        timer = setInterval(()=>{
            testimonialNext();
        }, 5000);
    });

    $('.testimonial-icon').click(async function(){
        const activeIndex = $('.card-active').attr('data-test-id');
        const index = $(this).attr('data-test-id');

        console.log(activeIndex - index);

        for(let i = 0;i < Math.abs(activeIndex-index);i++){
            if(activeIndex - index > 0){
                testimonialPrev();
            }else{
                testimonialNext();
            }
            await sleep(500);
        }

        clearInterval(timer);
        timer = setInterval(()=>{
            testimonialNext();
        }, 5000);
    });
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function testimonialNext () {
        const prev = $(".card-prev");
        const active = $(".card-active");
        const next = $(".card-next");

        prev.addClass("card-hide");
        prev.removeClass("card-prev");

        active.addClass("card-prev");
        active.removeClass("card-active");

        next.addClass("card-active");
        next.removeClass("card-next");

        $('.icon-active').removeClass('icon-active');
        $(`.testimonial-icon[data-test-id='${next.attr('data-test-id')}']`).addClass('icon-active');

        if (next.next().html() == undefined) {
            $(".testimonial-card:first-child").addClass("card-next");
            $(".testimonial-card:first-child").removeClass("card-hide");
        } else {
            next.next().addClass("card-next");
            next.next().removeClass("card-hide");
        }

    }
    function testimonialPrev () {
        const prev = $(".card-prev");
        const active = $(".card-active");
        const next = $(".card-next");
        next.addClass("card-hide");
        next.removeClass("card-next");

        active.addClass("card-next");
        active.removeClass("card-active");

        console.log(active.attr('data-test-id'));

        prev.addClass("card-active");
        prev.removeClass("card-prev");

        $('.icon-active').removeClass('icon-active');
        $(`.testimonial-icon[data-test-id='${prev.attr('data-test-id')}']`).addClass('icon-active');

        if (prev.prev().html() == undefined) {
            $(".testimonial-card:last-child").addClass("card-prev");
            $(".testimonial-card:last-child").removeClass("card-hide");
        } else {
            prev.prev().addClass("card-prev");
            prev.prev().removeClass("card-hide");
        }
    }
});
