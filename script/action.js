setInterval(function(){
    $('.slide li').eq(0).fadeIn(500).delay(2000).fadeOut(500).delay(6000)
    $('.slide li').eq(1).delay(3000).fadeIn(500).delay(2000).fadeOut(500).delay(3000)
    $('.slide li').eq(2).delay(6000).fadeIn(500).delay(2000).fadeOut(500)
});



$('.notice_box li').eq(0).click(function(){
    $('.modal').show(300)
})
$('.popup a').click(function(){
    $('.modal').hide(300)
})