$(document).ready(function () {
  /* Browser fullscreen experience on double click */
  /*
    if (self == top) {
        $('body').on('dblclick', function (e) {

            if (!document.fullscreenElement && // alternative standard method
                !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }

        });
    } else {
        
    }
    */

  /* float label checking input is not empty */
  $('.float-label .form-control').on('blur', function () {
    if ($(this).val() || $(this).val().length != 0) {
      $(this).closest('.float-label').addClass('active')
    } else {
      $(this).closest('.float-label').removeClass('active')
    }
  })

  /* menu open close wrapper screen click close menu */
  $('.menu-btn').on('click', function (e) {
    e.stopPropagation()
    if ($('body').hasClass('sidemenu-open') == true) {
      $('body, html').removeClass('sidemenu-open')
      setTimeout(function () {
        $('body, html').removeClass('menuactive')
      }, 500)
    } else {
      $('body, html').addClass('sidemenu-open menuactive')
    }
  })

  $('.wrapper').on('click', function () {
    if ($('body').hasClass('sidemenu-open') == true) {
      $('body, html').removeClass('sidemenu-open')
      setTimeout(function () {
        $('body, html').removeClass('menuactive')
      }, 500)
    }
  })

  /* filter click open filter */
  if ($('body').hasClass('filtermenu-open') == true) {
    //$('.filter-btn').find('i').html('close');
  }
  $('.filter-btn').on('click', function () {
    if ($('body').hasClass('filtermenu-open') == true) {
      $('body').removeClass('filtermenu-open')
      //$(this).find('i').html('filter_list')
    } else {
      $('body').addClass('filtermenu-open')
      // $(this).find('i').html('close')
    }
  })

  /* background image to cover */
  $('.background').each(function () {
    var imagewrap = $(this)
    var imagecurrent = $(this).find('img').attr('src')
    imagewrap.css('background-image', 'url("' + imagecurrent + '")')
    $(this).find('img').remove()
  })

  /* drag and scroll like mobile remove while creating mobile app */
  ;(function ($) {
    $.dragScroll = function (options) {
      var settings = $.extend(
        {
          scrollVertical: true,
          scrollHorizontal: true,
          cursor: null,
        },
        options,
      )

      var clicked = false,
        clickY,
        clickX

      var getCursor = function () {
        //if (settings.cursor) return settings.cursor;
        //if (settings.scrollVertical && settings.scrollHorizontal) return 'url(img/touch.png), move';
        //if (settings.scrollVertical) return 'row-resize';
        //if (settings.scrollHorizontal) return 'col-resize';
      }

      var updateScrollPos = function (e, el) {
        $('html').css('cursor', getCursor())
        var $el = $(el)
        settings.scrollVertical &&
          $el.scrollTop($el.scrollTop() + (clickY - e.pageY))
        settings.scrollHorizontal &&
          $el.scrollLeft($el.scrollLeft() + (clickX - e.pageX))
      }

      $(document).on({
        mousemove: function (e) {
          clicked && updateScrollPos(e, this)
        },
        mousedown: function (e) {
          clicked = true
          clickY = e.pageY
          clickX = e.pageX
        },
        mouseup: function () {
          clicked = false
          //$('html').css('cursor', 'url(img/logo-cursor.png), auto');
        },
      })
    }
  })(jQuery)

  $.dragScroll()
  /* End of drag and scroll like mobile remove while creating mobile app */

  /* theme color cookie */
  if (
    $.type($.cookie('theme-color')) !== 'undefined' &&
    $.cookie('theme-color') !== ''
  ) {
    $('html').removeClass('grey-theme')
    $('html').addClass($.cookie('theme-color'))
  }

  $('.theme-color .btn').on('click', function () {
    $('html').removeClass('grey-theme')
    $('html').removeClass($.cookie('theme-color'))
    var themecolor = $(this).attr('data-theme')
    $.cookie('theme-color', themecolor, {
      expires: 1,
    })
    $('html').addClass($.cookie('theme-color'))
  })

  /* theme layout cookie */
  if (
    $.type($.cookie('theme-color-layout')) !== 'dark-layout' &&
    $.cookie('theme-color-layout') !== 'dark-layout'
  ) {
    $('#theme-dark').prop('checked', false)
    $('html').addClass($.cookie('theme-color-layout'))
    $('html').removeClass('dark-layout')
  } else {
    $('#theme-dark').prop('checked', true)
    $('html').addClass($.cookie('theme-color-layout'))
  }
  $('#theme-dark').on('change', function () {
    if ($(this).is(':checked') === true) {
      $('html').removeClass('light-layout')
      $('html').removeClass($.cookie('theme-color-layout'))
      $.cookie('theme-color-layout', 'dark-layout', {
        expires: 1,
      })
      $('html').addClass($.cookie('theme-color-layout'))
    } else {
      $('html').removeClass('dark-layout')
      $('html').removeClass($.cookie('theme-color-layout'))
      $.cookie('theme-color-layout', 'light-layout', {
        expires: 1,
      })
      $('html').addClass($.cookie('theme-color-layout'))
    }
  })

  /**
   * check device mobile or desktop.
   */
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent,
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4),
    )
  ) {
    // mobile
    $('#logo').removeClass(' text-left')
    $('#logo').addClass(' text-center')

    $('#btn-left').show()
    $('#header-signin-signup').hide()
    $('#btn-menu').show()
    $('#header-footer').hide()
    $('#footer-realm').hide()
    $('#footer-company').hide()
    $('#footer-bar-navigation').show()
    $('#btn-account').hide()
  } else {
    // desktop
    $('#btn-left').show()
    $('#header-signin-signup').show()
    $('#logo').removeClass(' text-center')
    $('#logo').addClass(' text-left')
    $('#btn-menu').hide()
    $('#header-footer').show()
    $('#footer-realm').show()
    $('#footer-company').hide()
    $('#footer-bar-navigation').hide()
    $('#btn-account').show()
  }
})

$(window).on('load', function () {
  $('.loader-screen').fadeOut('slow')

  /* header active on scroll more than 50 px*/
  if ($(this).scrollTop() >= 30) {
    $('.header').addClass('active')
  } else {
    $('.header').removeClass('active')
  }

  $(window).on('scroll', function () {
    /* header active on scroll more than 50 px*/
    if ($(this).scrollTop() >= 30) {
      $('.header').addClass('active')
    } else {
      $('.header').removeClass('active')
    }
  })
})
