(function ($) {
  $(document).ready(function () {
    $("#navbarNavDropdown .nav-item").hover(
      function () {
        $(this).addClass("hover-stable-line");
      },
      function () {
        $(this).removeClass("hover-stable-line");
      }
    );
    // HEADER SEARCH
    $("header .search-btn").on("click", function () {
      $("header .search--bar").slideToggle();
      $(".search--bar input").focus();
    });

    $("header .search--bar button").on("click", function (e) {
      e.preventDefault();
      $("header .search--bar").slideToggle();
    });
    var headerHeight = $('.header-transparent').outerHeight();

    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var $mainMenu = $('.custom-header');

      if (scrollTop > headerHeight) {
        $mainMenu.addClass('is-sticky').css({
          'position': 'fixed',
          'width': '100%', // Adjust width as needed
          'left': '0',
          'top': '0'
        });
      } else {
        $mainMenu.removeClass('is-sticky').removeAttr('style');
      }
    });
    // Show the preloader for 3 seconds
    setTimeout(function () {
      // Hide the preloader
      $('#preloader').fadeOut('slow', function () {
        // Show the main content
        $('#content').fadeIn('slow');

        // Allow scrolling again
        $('body').css('overflow', 'auto');
      });
    }, 3000); // 3 seconds delay
    // Initialize the Bootstrap carousel with autoplay and interval
    $('#carouselExampleCaptions').carousel({
      interval: 3000, // 3 seconds interval
      pause: 'hover' // Pause the carousel on hover
    });

    // Add animation to the carousel captions when the slide changes
    $('#carouselExampleCaptions').on('slide.bs.carousel', function (e) {
      var $nextSlide = $(e.relatedTarget); // The slide being transitioned to
      var $caption = $nextSlide.find('.carousel-caption');

      // Add animation class
      $caption.addClass('animate__animated animate__fadeInUp');

      // Remove the animation class after the animation completes (optional)
      $caption.one('animationend', function () {
        $caption.removeClass('animate__animated animate__fadeInUp');
      });
    });
    // Menu
    $('.menu-subs-inner').each(function () {
      var menuCols = $(this).find('.menu-subs-col').length;

      switch (menuCols) {
        case 1:
          $(this).addClass("class-list-title");
          break;
          // case 6:
          //   $(this).addClass("class-for-6");
          //   break;
          // case 7:
          //   $(this).addClass("class-for-7");
          //   break;
        default:
          // Handle other cases if needed
          break;
      }
    });
    //
    $('.main-menu .navbar-toggler').click(function () {
      $('#navbarNavDropdown').toggleClass('show--menu');
    });
    $('.burger-menu').click(function () {
      $('#navbarNavDropdown').removeClass('show--menu');
    });

    $("#menu-second-main-mobile > li > .list-product-cat").each(
      function () {
        $(this).on("click", function () {
          // $('.list-product-cat').removeClass("hover-color-mobile");
          // $(this).addClass('hover-color-mobile');
          if ($(this).hasClass("hover-color-mobile")) {
            $(this).removeClass("hover-color-mobile");
          } else {
            $(
              "#menu-second-main-mobile  > li > a .glyphicon"
            ).removeClass("glyphicon-menu-up");
            $(".list-product-cat").removeClass("hover-color-mobile");
            $(this).addClass("hover-color-mobile");
          }
        });
      }
    );

    $("#menu-second-main-mobile  > li > .list-product-cat").click(function (e) {
      var $this = $(this);
      var href = $this.attr("href");

      if (href !== "#") {
        return; // Don't prevent default behavior
      }

      $(
        "#menu-second-main-mobile > li .list-product-subnav"
      ).slideUp();
      if (!$this.next().is(":visible")) {
        $this.next().slideDown();
      }
      e.stopPropagation();

      var spann = $this.find(".glyphicon");
      spann.toggleClass("glyphicon-menu-up");
    });


    $(".list-product-subnav .menu-item-has-children .list-product-subnav")
      .parent()
      .addClass("li_with_arrow");

    function removeinverse(indexElment) {
      $(".list-product-subnav .menu-item-has-children a").each(function () {
        if (indexElment !== $(this).parent().index()) {
          $(this).removeClass("inverse_arrow");
          $(this).next().removeClass("showmostdropdown");
        }
      });
    }
    $(".list-product-subnav .menu-item-has-children a").on("click", function () {
      removeinverse($(this).parent().index());
      $(this).toggleClass("inverse_arrow");
    });
    var inner_hs = $(
        ".show_all_menu .list-product-subnav .list-product-subnav"
      )
      .parent()
      .children("a");
    inner_hs.on("click", function (e) {
      e.preventDefault();
      $(this).next().toggleClass("showmostdropdown");
    });
    // Metire
    $(".nos-metire-li").each(function () {
      $(this).on("click", function () {
        if ($(this).hasClass("niveau--3")) {
          $(this).removeClass("niveau--3");
        } else {
          $(".nos-metire-li").removeClass("niveau--3");
          $(this).addClass("niveau--3");
        }
      });
    });
  });
})(jQuery);
