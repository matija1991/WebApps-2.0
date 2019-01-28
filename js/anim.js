//*******efekt */{
    $(document).ready(function () {
        if ($(window).width() > 767) {
            $(".anim, ul").fadeIn(1000);
            $("nav").slideDown(1000);
        }
        if ($(window).width() < 767) {
            $(document).ready(function () {
                $("nav").slideDown(1000);
                $(".anim").fadeIn("slow");
                $("#menuIcon").on("click", function () {
                    $("ul").animate({
                        height: 'toggle'
                    });
                });
            });
        }
    });