// 서브5 게시판
$(".answer").hide();
$(".list").click(function(){
    $(this).next().slideToggle()
    $(this).children(".turn_wrap").children().toggleClass("turn")
});

// qna 팝업
$(".newsletter2").hide();
$(".newsletter1").click(function(){
    $(".newsletter2").fadeToggle(1000)
});

$(".newsletter1").click(function(){
    $(".newsletter_click").fadeToggle(1000);
});

// 호버하면 말풍선 나타나기
$(document).ready(function() {
    $('.news1').hover(
        function() {
            $('.here3').fadeOut(); // 마우스가 올라갈 때 .here3를 숨김
        },
        function() {
            $('.here3').fadeIn(); // 마우스가 나갈 때 .here3를 다시 보이게 함
        }
    );
});



