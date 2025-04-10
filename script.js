$(function () {
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 0,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        769: {
          slidesPerView: 2,
        },
      },
    });
  
    $(".accordion-title").on("click", function () {
      $(this).next(".accordion-content").slideToggle(300);
    });
  
    function handleFadeIn() {
      $(".fade-in").each(function () {
        const $el = $(this);
        const elementTop = $el.offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
  
        if (windowBottom > elementTop + 80) {
          $el.addClass("show");
        }
      });
    }
  
    handleFadeIn();
    $(window).on("scroll", handleFadeIn);
  
    $("#hamburger").on("click", function () {
      const $menu = $(".mobile-menu");
  
      if ($menu.hasClass("active")) {
        $menu.removeClass("active").slideUp(300);
      } else {
        $menu
          .addClass("active")
          .css("display", "flex")
          .hide()
          .slideDown(300);
      }
    });
  });