$(function () {
    $(".burger-menu__container").on("click", function () {
        $(".header-top__mobile-menu__container").slideToggle();
        $(".burger-menu__container").toggleClass("burgerMenuOpen")
        $(".burger-menu-bg").addClass('invisible');
        $(".backround").toggleClass("invisible");
    });
    $(".backround").on("click", function () {
        $(".header-top__mobile-menu__container").slideToggle();
        $(".burger-menu__container").toggleClass("burgerMenuOpen")
        $(".backround").toggleClass("invisible");
    });
    $(window).on('scroll', function() {
        const isMenuOpen = $(".burger-menu__container").hasClass('burgerMenuOpen');
        if (!isMenuOpen) {
            if ($(this).scrollTop() > 70) {
                $(".burger-menu-bg").removeClass('invisible');
            } else {
                $(".burger-menu-bg").addClass('invisible');
            } 
        }
    });
});