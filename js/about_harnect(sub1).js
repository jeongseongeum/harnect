// gnb 백그라운드 
$(window).scroll(function(){
    if($(this).scrollTop()>50){
      $(".inner_header_wrap").addClass("bg_color")
    }else{
      $(".inner_header_wrap").removeClass("bg_color")
    }
  });
  // 서브1 섹션1 순차적으로


  // waitinf for heart 셀렉트 wrap
  //동물구분 
$(".ani").hide();
$(".select_btn1").click(function(){
  $(".ani").toggle()
  $(".select_btn1 span").toggleClass("turn1")
});

function option11(){
  document.getElementById("select1").innerHTML='강아지'
  $(".ani").hide();
  $(".select_btn1 span").toggleClass("turn1")
}
function option21(){
  document.getElementById("select1").innerHTML='고양이'
  $(".ani").hide();
  $(".select_btn1 span").toggleClass("turn1")
}
function option31(){
  document.getElementById("select1").innerHTML='기타'
  $(".ani").hide();
  $(".select_btn1 span").toggleClass("turn1")
}

// 성별
$(".gender").hide();
$(".select_btn2").click(function(){
  $(".gender").toggle()
  $(".select_btn2 span").toggleClass("turn2")
});

function option12(){
  document.getElementById("select2").innerHTML='남아'
  $(".gender").hide();
  $(".select_btn2 span").toggleClass("turn2")
}
function option22(){
  document.getElementById("select2").innerHTML='여아'
  $(".gender").hide();
  $(".select_btn2 span").toggleClass("turn2")
}

// 연령
$(".age").hide();
$(".select_btn3").click(function(){
  $(".age").toggle()
  $(".select_btn3 span").toggleClass("turn3")
});

function option13(){
  document.getElementById("select3").innerHTML='puppy'
  $(".age").hide();
  $(".select_btn3 span").toggleClass("turn3")
}
function option23(){
  document.getElementById("select3").innerHTML='junior'
  $(".age").hide();
  $(".select_btn3 span").toggleClass("turn3")
}
function option33(){
  document.getElementById("select3").innerHTML='adult'
  $(".age").hide();
  $(".select_btn3 span").toggleClass("turn3")
}
function option43(){
  document.getElementById("select3").innerHTML='senior'
  $(".age").hide();
  $(".select_btn3 span").toggleClass("turn3")
}

// 연령
$(".character").hide();
$(".select_btn4").click(function(){
  $(".character").toggle()
  $(".select_btn4 span").toggleClass("turn4")
});

function option14(){
  document.getElementById("select4").innerHTML='얌전'
  $(".character").hide();
  $(".select_btn4 span").toggleClass("turn4")
}
function option24(){
  document.getElementById("select4").innerHTML='보통'
  $(".character").hide();
  $(".select_btn4 span").toggleClass("turn4")
}
function option34(){
  document.getElementById("select4").innerHTML='활발'
  $(".character").hide();
  $(".select_btn4 span").toggleClass("turn4")
}
function option44(){
  document.getElementById("select4").innerHTML='매우활발'
  $(".character").hide();
  $(".select_btn4 span").toggleClass("turn4")
}

//서브4 팝업
$(".close_btn").click(function(){
  $(".top_popup1").hide()
});
$(".close_btn2").click(function(){
  $(".top_popup2").hide()
});


