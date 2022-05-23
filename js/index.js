const isMobile = $(window).width() <= 480;
/*測試js按鈕用*/
// $("#Btb1").click(function () {
//     alert("Btn1")
// });
// $("#Btb2").click(function () {
//     alert("Btn2")
// });
/*init---------------------*/


$("#Btn1").addClass("js-nav-btn")
if (isMobile) {
    console.log("手機板")
    $('#SlideLs .slide-item').scroll(function () {
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() == 0) {
          $('#Nav').removeClass('js-nav');
        } else {
          $('#Nav').addClass('js-nav');
        }
      });
    } else {
      console.log('電腦版');
    }

/*event------------------ */
$('#Btn1').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
});

$('#Btn2').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
});

$('#Btn3').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
});

$('#Btn4').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
});

$('#Btn5').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
});

$('#Btn6').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
});