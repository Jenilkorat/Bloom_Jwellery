// HEADER-BOTTOM
$(document).ready(function () {
    $(".open-menu").click(function () {
        $(".mobile-nav").css({
            "transform": "translateX(0)"
        });
        $(this).hide();
        $(".close-menu").show();

    });

    $(".close-menu").click(function () {
        $(".mobile-nav").css(
            "transform", "translateX(-100%)");
        $(this).hide();
        $(".open-menu").show();

    });
});

// SLIDER-BLOCK
$(document).ready(function () {
    $('.slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

//CATEGORY BLOCK
$(document).ready(function () {
    $('.category').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            },
            600: {
                items: 4
            },
            900: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });
});


// COLLECTION-BLOCK
$(document).ready(function () {
    $('.collection').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});

//REVIEW-BLOCK
$(document).ready(function () {
    $('.review').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
});

// FOOTER-MIDDDLE-FAQ
$(document).ready(function () {
    $(".angle").click(function () {
        var footer = $(this).attr("data-content");
        $(footer).slideToggle(500);
        $(this).toggleClass("btn-up");
    });
});


//SEARCH-BUTTON
$(document).ready(function () {
    $(".search").click(function () {
        $(".mobile-search").toggle(400)
    });
});

//CHAT-BUTTON
$(document).ready(function () {
    $(".chat-btn").click(function () {
        $(".fas.fa-comment").toggle()
        $(".fas.fa-times").toggle()
        $(".login-form").toggle(600)
    });
});


//MOBILE-SUBMENU
$(document).ready(function () {
    $(".menu-title").click(function () {
        var menu = $(this).attr("data-content");
        $(menu).slideToggle(500);
        $(this).toggleClass("btn-up");
    });
});

//SCROLL TOP TO BOTTOM
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $(".top-btn").show();
        }
        else {
            $(".top-btn").hide();
        }
    });
});

$(document).ready(function () {
    $(".top-btn").click(function () {
        $('html').animate({
            scrollTop: 0
        }, 2000);
    });
});


//SOCIAL-ICON
$(document).ready(function () {
    $(".close-icons").click(function () {
        $(".iconbar-inner").toggle();
    });
});

// COOKIE-BTN
$(document).ready(function () {
    $(".cookies-btn").click(function () {
        $(".cookies-outer").hide();
    });
});
/*=============CATEGORY PAGE START============================= */

//FOR PRICE
$(document).ready(function () {
    $(".icon").click(function () {
        $(".submenu").slideToggle(400);
    });
});

//CATEGORY PRODUCT LIST BLOCK
$(document).ready(function () {
    $("#mode-label").click(function () {
        $(".product-grid").show();
        $(".product-list").hide();
        $(this).css({ "background-color": "#daba5d", "color": "#fff" })
        $("#mode-menu").css({ "background-color": "#F8F8F8", "color": "#333" })
    });

    $("#mode-menu").click(function () {
        $(".product-grid").hide();
        $(".product-list").show();
        $(this).css({ "background-color": "#daba5d", "color": "#fff" })
        $("#mode-label").css({ "background-color": "#F8F8F8", "color": "#333" })
    });
});


    
/* ================PRODUCT PAGE START===============================================*/
//PRODUCT SLIDER
$(document).ready(function () {
    $('.bangle').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});
// PRODUCT QUNTITY ADD
var a = -1;
function add() {
    a++;
    document.getElementById("answer").value = a;
}
function minus() {
    if (a > 0) {
        a--;
        document.getElementById("answer").value = a;
    }
}
//DETAILS AND REVIEW BLOCK
$(document).ready(function () {
    $("#details").click(function () {
        $(".details-text").show();
        $(".review-text").hide();
        $(this).css({ "background-color": "#daba5d", "color": "#fff" })
        $("#reviews").css({ "background-color": "#F8F8F8", "color": "#333" })
    });

    $("#reviews").click(function () {
        $(".details-text").hide();
        $(".review-text").show();
        $(this).css({ "background-color": "#daba5d", "color": "#fff" })
        $("#details").css({ "background-color": "#F8F8F8", "color": "#333" })
    });
});


/*=======================FAQ PAGE START==============================*/
$(document).ready(function () {
    $(".title").click(function () {
        var faq = $(this).attr("data-content");
        $(faq).slideToggle(600);
    })
});


// heder-sticky
// window.onscroll = function () { myFunction() };

// var header = document.getElementById("myheader");
// var sticky = header.offsetTop;

// function myFunction() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     }
//     else {
//         header.classList.remove("sticky");
//     }
// }

// $(document).ready(function(){
//     $(window).on("scroll",function(){
//         var scroll=$(window).scrollTop();
//         if(scroll>30){
//             $("#myheader").addClass("sticky");
//         }
//         else{
//             $("#myheader").removeClass("sticky");

//         }
//     })
// });
