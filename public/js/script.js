$(function () {
    var btnMenu = document.querySelector("a.btn-menu");
    var menu = document.querySelector("nav");

    btnMenu.addEventListener("click", function () {
        menu.style.transform = "translateX(0)";

    });
    menu.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 720px)").matches) {
            menu.style.transform = "translateX(-100%)";
        }
    });


    //smoothScroll
    $('[href^="#"]').on("click", function(e) {
        e.preventDefault();
        var leHref = $(this).attr("href");
        var decalage = $(leHref).offset().top - 50;
        $("body, html").animate({
            "scrollTop": decalage
        }, 600);
    }); //fin smoothScroll

    //STIKY MENU
    $(document).on("scroll", function() { //j'écoute le scroll
        var hauteur = $(this).scrollTop();
        console.log(hauteur);
        var myItems = $(".item");
        var bullets = $(".bullet");
        for (var i = 0; i < myItems.length; i++) {
            currentItem = $(myItems[i]);
            bullet = $(bullets[i]);
            if ( hauteur > ( currentItem.offset().top - ($(window).height()/2 ) )) {
                currentItem.removeClass("item-hide");
                bullet.css( "display", "block" );
            }
        }
    }); // FIN STIKY MENU

});