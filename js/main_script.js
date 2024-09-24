$(window).scroll(function(){
    if($(this).scrollTop() > 5000){
         $(".fow_test").addClass("fow_wrap")
    }
});

$(".campaign_banner ul li").hide();
$(".campaign_banner ul li:nth-child(1)").show();
setInterval(function(){
    $(".campaign_banner ul li:nth-child(1)").fadeOut(1000).next().fadeIn(1000).end().appendTo(".campaign_banner ul")
},3500);

// 커뮤니티 버튼눌렀을때 애드클래스
const tabBtn = $(".info_name > a");
const tabCont = $(".info_contents > div");
tabCont.hide().eq(0).show();
tabBtn.click(function(){
    const index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    tabCont.eq(index).show().siblings().hide();
});

// 발자국
document.addEventListener('DOMContentLoaded', function () {
    // fow 이미지 요소들을 선택합니다.
    const fowImages = document.querySelectorAll('.fow_img1, .fow_img2, .fow_img3, .fow_img4, .fow_img5');
    const swiper = document.querySelector('#store .swiper');

    // Intersection Observer를 사용하여 swiper 요소의 가시성을 감지합니다.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // swiper가 뷰포트에 들어오면 각 fow 이미지에 애니메이션 클래스를 순차적으로 추가합니다.
                fowImages.forEach((image, index) => {
                    setTimeout(() => {
                        image.classList.add('animate');
                    }, index * 500); // 200ms 간격으로 애니메이션 실행
                });
            } 
        });
    }, {
        threshold: 0.3 // 요소의 50%가 보일 때 트리거
    });

    // swiper 요소를 관찰합니다.
    if (swiper) {
        observer.observe(swiper);
    }
});

// gnb 백그라운드 
$(window).scroll(function(){
    if($(this).scrollTop()>900){
      $(".inner_header_wrap").addClass("bg_color")
    }else{
      $(".inner_header_wrap").removeClass("bg_color")
    }
  });



//   언어

$(".option").hide();
$(".select_btn").click(function(){
    $(".option").toggle()
});

function option1(){
    document.getElementById("select").innerHTML = 'KR'
    $(".option").hide();
}
function option2(){
    document.getElementById("select").innerHTML = 'EN'
    $(".option").hide();
}
function option3(){
    document.getElementById("select").innerHTML = 'JP'
    $(".option").hide();
}

// qna 팝업
$("#popup").hide();
$(".qna_btn").click(function(){
    $("#popup").fadeToggle(1000)
});
$(".popup_close_btn").click(function(){
    $("#popup").fadeOut()
});

// 패럴렉스 스크롤링 - 페이지가 겹쳐지게

gsap.utils.toArray(".parallax__item").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true, 
        pinSpacing: false 
    });
});
//  패럴렉스 스크롤링 - 마우스휠 부드럽게(스무스)
const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
출처: https://webstoryboy.co.kr/1923 [WEBSTORYBOY:티스토리]


// qna에 hover 했을때

$(".click").hide();
$(".inner_qna a").mouseenter(function(){
    $(".click").stop().show();
});
$(".inner_qna a").mouseleave(function(){
    $(".click").stop().hide();
});

// 커뮤니티 오른쪽 버튼 addClass
$(".info_name a").click(function(){
    $(this).addClass("on").siblings().removeClass("on")
});




// 스토어  슬라이드 슬릭

// 섹션1 동그라미 패럴렉스


// 하트 바운스


// 서브1 섹션3 위드컴퍼니 슬라이더




// 기브하트 서브페이지

// 후원금은이렇게 사용됩니다
