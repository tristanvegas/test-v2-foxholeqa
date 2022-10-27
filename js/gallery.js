$(document).ready(function(){

    let timer = setInterval(()=>{
        next();
    }, 5000);

    $('.gallery-control-next').click(function(){
        next();

        clearInterval(timer);
        timer = setInterval(()=>{
            next();
        }, 5000);
    });
    $('.gallery-control-prev').click(function(){
        galleryPrev();
        galleryThumbPrev();

        clearInterval(timer);
        timer = setInterval(()=>{
            next();
        }, 5000);
    });
    $('.gallery-thumb-item').click(async function(){
        const img = $('.gallery-active');
        const difference = img.attr('data-gal-id') - $(this).attr('data-gal-id');
        console.log(difference);
        for(let i = 0;i < Math.abs(difference);i++){
            if(difference < 0){
                galleryNext();
                galleryThumbNext();
            }else{
                galleryPrev();
                galleryThumbPrev();
            }
            await sleep(300);
        }

        clearInterval(timer);
        timer = setInterval(()=>{
            next();
        }, 5000);
    });
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function next(){
        galleryNext();
        galleryThumbNext();
    }
    function galleryNext(){
        const hideLeft = $('.gallery-hidden-left');
        const prev = $('.gallery-prev');
        const active = $('.gallery-active');
        const next = $('.gallery-next');
        const hideRight = $('.gallery-hidden-right');

        $('.gallery-item').removeAttr('data-gal-id');

        hideLeft.prev().attr('data-gal-id', 1);

        hideLeft.addClass('gallery-hidden');
        hideLeft.removeClass('gallery-hidden-left');
        hideLeft.attr('data-gal-id', 2);

        prev.addClass('gallery-hidden-left');
        prev.removeClass('gallery-prev');
        prev.attr('data-gal-id', 3);

        active.addClass('gallery-prev');
        active.removeClass('gallery-active');
        active.attr('data-gal-id', 4);

        next.addClass('gallery-active');
        next.removeClass('gallery-next');
        next.attr('data-gal-id', 5);

        hideRight.addClass('gallery-next');
        hideRight.removeClass('gallery-hidden-right');
        hideRight.attr('data-gal-id', 6);

        if (hideRight.next().html() == undefined) {
            $(".gallery-item:first-child").addClass("gallery-hidden-right");
            $(".gallery-item:first-child").removeClass("gallery-hidden");
            $(".gallery-item:first-child").attr('data-gal-id', 7);
            $(".gallery-item:first-child").next().attr('data-gal-id', 8);
            $(".gallery-item:first-child").next().next().attr('data-gal-id', 9);
        } else {
            hideRight.next().addClass("gallery-hidden-right");
            hideRight.next().removeClass("gallery-hidden");
            hideRight.next().attr('data-gal-id', 7);

            if(hideRight.next().next().html() == undefined){
                $(".gallery-item:first-child").attr('data-gal-id', 8);
                $(".gallery-item:first-child").next().attr('data-gal-id', 9);
            }else{
                hideRight.next().next().attr('data-gal-id', 8);
                if(hideRight.next().next().next().html() == undefined){
                    $(".gallery-item:first-child").attr('data-gal-id', 9);
                }else{
                    hideRight.next().next().attr('data-gal-id', 9);
                }
            }
        }
    }
    function galleryPrev(){
        const hideLeft = $('.gallery-hidden-left');
        const prev = $('.gallery-prev');
        const active = $('.gallery-active');
        const next = $('.gallery-next');
        const hideRight = $('.gallery-hidden-right');

        $('.gallery-item').removeAttr('data-gal-id');

        hideRight.next().attr('data-gal-id', 9);;

        hideRight.addClass('gallery-hidden');
        hideRight.removeClass('gallery-hidden-right');
        hideRight.attr('data-gal-id', 8);;

        next.addClass('gallery-hidden-right');
        next.removeClass('gallery-next');
        next.attr('data-gal-id', 7);

        active.addClass('gallery-next');
        active.removeClass('gallery-active');
        active.attr('data-gal-id', 6);

        prev.addClass('gallery-active');
        prev.removeClass('gallery-prev');
        prev.attr('data-gal-id', 5);

        hideLeft.addClass('gallery-prev');
        hideLeft.removeClass('gallery-hidden-left');
        hideLeft.attr('data-gal-id', 4);

        if (hideLeft.prev().html() == undefined) {
            $(".gallery-item:last-child").addClass("gallery-hidden-left");
            $(".gallery-item:last-child").removeClass("gallery-hidden");
            $(".gallery-item:last-child").attr('data-gal-id', 3);
            $(".gallery-item:last-child").prev().attr('data-gal-id', 2);
            $(".gallery-item:last-child").prev().prev().attr('data-gal-id', 1);
        } else {
            hideLeft.prev().addClass("gallery-hidden-left");
            hideLeft.prev().removeClass("gallery-hidden");
            hideLeft.prev().attr('data-gal-id', 3);
            if(hideLeft.prev().prev().html() == undefined){
                $(".gallery-item:last-child").attr('data-gal-id', 2);
                $(".gallery-item:last-child").prev().attr('data-gal-id', 1);
            }else{
                hideLeft.prev().prev().attr('data-gal-id', 2);
                if(hideLeft.prev().prev().prev().html() == undefined){
                    $(".gallery-item:last-child").attr('data-gal-id', 1);
                }else{
                    hideLeft.prev().prev().prev().attr('data-gal-id', 1);
                }
            }
        }
    }

    const thumbClasses = [
        'gallery-thumb-hidden',
        'gallery-thumb-hidden-left',
        'gallery-thumb-prev-4',
        'gallery-thumb-prev-3',
        'gallery-thumb-prev-2',
        'gallery-thumb-prev-1',
        'gallery-thumb-active',
        'gallery-thumb-next-1',
        'gallery-thumb-next-2',
        'gallery-thumb-next-3',
        'gallery-thumb-next-4',
        'gallery-thumb-hidden-right',
    ];
    function galleryThumbPrev(){
        const hideLeft = $('.gallery-thumb-hidden-left');
        const prev4 = $('.gallery-thumb-prev-4');
        const prev3 = $('.gallery-thumb-prev-3');
        const prev2 = $('.gallery-thumb-prev-2');
        const prev1 = $('.gallery-thumb-prev-1');
        const active = $('.gallery-thumb-active');
        const next1 = $('.gallery-thumb-next-1');
        const next2 = $('.gallery-thumb-next-2');
        const next3 = $('.gallery-thumb-next-3');
        const next4 = $('.gallery-thumb-next-4');
        const hideRight = $('.gallery-thumb-hidden-right');

        $('.gallery-thumb-item').removeAttr('data-gal-id');

        hideRight.addClass(thumbClasses[0]);
        hideRight.removeClass(thumbClasses[11]);

        next4.addClass(thumbClasses[11]);
        next4.removeClass(thumbClasses[10]);

        next3.addClass(thumbClasses[10]);
        next3.removeClass(thumbClasses[9]);
        next3.attr('data-gal-id', 9);

        next2.addClass(thumbClasses[9]);
        next2.removeClass(thumbClasses[8]);
        next2.attr('data-gal-id', 8);

        next1.addClass(thumbClasses[8]);
        next1.removeClass(thumbClasses[7]);
        next1.attr('data-gal-id', 7);

        active.addClass(thumbClasses[7]);
        active.removeClass(thumbClasses[6]);
        active.attr('data-gal-id', 6);

        prev1.addClass(thumbClasses[6]);
        prev1.removeClass(thumbClasses[5]);
        prev1.attr('data-gal-id', 5);

        prev2.addClass(thumbClasses[5]);
        prev2.removeClass(thumbClasses[4]);
        prev2.attr('data-gal-id', 4);

        prev3.addClass(thumbClasses[4]);
        prev3.removeClass(thumbClasses[3]);
        prev3.attr('data-gal-id', 3);

        prev4.addClass(thumbClasses[3]);
        prev4.removeClass(thumbClasses[2]);
        prev4.attr('data-gal-id', 2);

        hideLeft.addClass(thumbClasses[2]);
        hideLeft.removeClass(thumbClasses[1]);
        hideLeft.attr('data-gal-id', 1);

        if(hideLeft.prev().html() == undefined){
            $('.gallery-thumb-item:last-child').addClass(thumbClasses[1]);
            $('.gallery-thumb-item:last-child').removeClass(thumbClasses[0]);
        }else{
            hideLeft.prev().addClass(thumbClasses[1]);
            hideLeft.prev().removeClass(thumbClasses[0]);
        }
    }
    function galleryThumbNext(){
        const hideLeft = $('.gallery-thumb-hidden-left');
        const prev4 = $('.gallery-thumb-prev-4');
        const prev3 = $('.gallery-thumb-prev-3');
        const prev2 = $('.gallery-thumb-prev-2');
        const prev1 = $('.gallery-thumb-prev-1');
        const active = $('.gallery-thumb-active');
        const next1 = $('.gallery-thumb-next-1');
        const next2 = $('.gallery-thumb-next-2');
        const next3 = $('.gallery-thumb-next-3');
        const next4 = $('.gallery-thumb-next-4');
        const hideRight = $('.gallery-thumb-hidden-right');

        $('.gallery-thumb-item').removeAttr('data-gal-id');

        hideLeft.addClass(thumbClasses[0]);
        hideLeft.removeClass(thumbClasses[1]);

        prev4.addClass(thumbClasses[1]);
        prev4.removeClass(thumbClasses[2]);

        prev3.addClass(thumbClasses[2]);
        prev3.removeClass(thumbClasses[3]);
        prev3.attr('data-gal-id', 1);

        prev2.addClass(thumbClasses[3]);
        prev2.removeClass(thumbClasses[4]);
        prev2.attr('data-gal-id', 2);

        prev1.addClass(thumbClasses[4]);
        prev1.removeClass(thumbClasses[5]);
        prev1.attr('data-gal-id', 3);

        active.addClass(thumbClasses[5]);
        active.removeClass(thumbClasses[6]);
        active.attr('data-gal-id', 4);

        next1.addClass(thumbClasses[6]);
        next1.removeClass(thumbClasses[7]);
        next1.attr('data-gal-id', 5);

        next2.addClass(thumbClasses[7]);
        next2.removeClass(thumbClasses[8]);
        next2.attr('data-gal-id', 6);

        next3.addClass(thumbClasses[8]);
        next3.removeClass(thumbClasses[9]);
        next3.attr('data-gal-id', 7);

        next4.addClass(thumbClasses[9]);
        next4.removeClass(thumbClasses[10]);
        next4.attr('data-gal-id', 8);

        hideRight.addClass(thumbClasses[10]);
        hideRight.removeClass(thumbClasses[11]);
        hideRight.attr('data-gal-id', 9);

        if(hideRight.next().html() == undefined){
            $('.gallery-thumb-item:first-child').addClass(thumbClasses[11]);
            $('.gallery-thumb-item:first-child').removeClass(thumbClasses[0]);
        }else{
            hideRight.next().addClass(thumbClasses[11]);
            hideRight.next().removeClass(thumbClasses[0]);
        }

    }
});


