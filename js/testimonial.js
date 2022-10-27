$(document).ready(()=>{

    let timer = setInterval(()=>{
        testimonialNext();
    }, 5000);

    $(".testimonial-prev").click(function () {
        const prev = $(".card-prev");
        const active = $(".card-active");
        const next = $(".card-next");
        next.addClass("card-hide");
        next.removeClass("card-next");

        active.addClass("card-next");
        active.removeClass("card-active");

        prev.addClass("card-active");
        prev.removeClass("card-prev");

        if (prev.prev().html() == undefined) {
            $(".testimonial-card:last-child").addClass("card-prev");
            $(".testimonial-card:last-child").removeClass("card-hide");
        } else {
            prev.prev().addClass("card-prev");
            prev.prev().removeClass("card-hide");
        }

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

        if (next.next().html() == undefined) {
            $(".testimonial-card:first-child").addClass("card-next");
            $(".testimonial-card:first-child").removeClass("card-hide");
        } else {
            next.next().addClass("card-next");
            next.next().removeClass("card-hide");
        }

    }
});
