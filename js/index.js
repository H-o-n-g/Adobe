const isMobile = $(window).width() <= 480;
const $ul = $("#SlideLs")
const $Nav = $("Nav")
/*測試js按鈕用*/
// $("#Btb1").click(function () {
//     alert("Btn1")
// });
// $("#Btb2").click(function () {
//     alert("Btn2")
// });
/*init---------------------*/


$("#Btn1").addClass("js-nav-btn")
// if (isMobile) {
//     console.log("手機板")
//     $U1.scroll(function () {
//         // console.log($(this).scrollTop());
//         if ($(this).scrollTop() == 0) {
//           $Nav.removeClass('js-nav');
//         } else {
//           $Nav.addClass('js-nav');
//         }
//       });
//     } else {
//       console.log('電腦版');
//     }
if (isMobile == true) {
  console.log('手機版才會做的事');
  $ul.find('.slide-item').scroll(function () {
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() == 0) {
      $Nav.removeClass('js-nav');
    } else {
      $Nav.addClass('js-nav');
    }
  });
}


/*event------------------ */
$('#Btn1').click(function () {
  $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
  $ul.css({
    left: 0,
    top: 0
  })
});

$('#Btn2').click(function () {
  $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
  $ul.css({
    left: "-100%",
    top: 0
  })
});

$('#Btn3').click(function () {
  $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
  $ul.css({
    left: "-200%",
    top: 0
  })
});

$('#Btn4').click(function () {
  $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
  $ul.css({
    left: 0,
    top: "-100%"
  })
});

$('#Btn5').click(function () {
  $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
  $ul.css({
    left: "-100%",
    top: "-100%"
  })
});

$('#Btn6').click(function () {
  $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
  $ul.css({
    left: "-200%",
    top: "-100%"
  })
});

$(".pd-item > a").fancybox();/**/