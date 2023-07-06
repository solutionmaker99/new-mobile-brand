$(document).ready(function() {

    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar_srink");
        } else {
            $(".navbar").removeClass("navbar_srink");
        }
    });


    // Videw Popup ----------------
    const videoSrc = $("#player-1").attr("src");

    $(".play-btn, .video_popup").on("click", function() {
        if ($(".video_popup").hasClass("open")) {

            $(".video_popup").removeClass("open");

            $("#player-1").attr("src", "");

        } else {

            $(".video_popup").addClass("open");

            if ($("#player-1").attr("src") == '') {

                $("#player-1").attr("src", videoSrc);
            }
        }
    });

    /* Features Carosel */

    $('.features-carosel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
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


    /* Screenshots Carosel */
    $('.screenshots-carosel').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 4,
                }
            }
        })
        /* Testimonial Carosel */
    $('.testimonial-carosel').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            responsiveClass: true,
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
        })
        /*  TEAM MABER CAROSEL */
    $('.team-carosel').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            responsiveClass: true,
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
        })
        /* ============================ SCROLL IT JS ====================== */
    $.scrollIt({
        topOffset: -50
    });
    $(".nav-link").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });

    /* ===================== TOGGLE THEME DARK & LIGHT MODE ================================*/

    function toggleTheme() {
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click", function() {
        $("body").toggleClass("dark");
        if ($("body").hasClass("dark")) {
            localStorage.setItem("Riyad's Web", "dark");
        } else {
            localStorage.setItem("Riyad's Web", "light");

        }
        updateIcon();
    })

    function updateIcon() {
        if ($("body").hasClass("dark")) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        } else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }
});