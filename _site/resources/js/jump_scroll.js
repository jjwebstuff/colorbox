var jump=function(e)
{
   if (e){
       e.preventDefault();
       var target = $(this).attr("href");
   }else{
       var target = location.hash;
   }

   $('.main-background').animate(
   {
      scrollTop: $(target).offset().top-60
   },1000,function()
   {
       location.hash = target;
   });

}

$(document).ready(function()
{
  if (location.pathname === "/about.html"){
    //if we ARE on the About.html page then we need to smooth scroll to where ever
    //the user is trying to
    $("#about-FAQ").click(function(e) {
      e.preventDefault();
      $('.main-background').scrollTo($("#FAQ"), 1000);
    });
    $("#about-team").click(function(e) {
      e.preventDefault();
      $('.main-background').scrollTo($("#team"), 1000);
    });
    $("#about-letterpress").click(function(e) {
      e.preventDefault();
      $('.main-background').scrollTo($("#letterpress"), 1000);
    });
    $("#about-color").click(function(e) {
      e.preventDefault();
      $('.main-background').scrollTo($("#color"), 1000);
    });
    $("#about-custom").click(function(e) {
      e.preventDefault();
      $('.main-background').scrollTo($("#custom"), 1000);
    });
  }
  else if (location.pathname === "/shop.html"){
    //if we ARE on the shop.html page then we need to smooth scroll to where ever
    //the user is trying to
    $("#shop-greetingcards").click(function(e) {
      e.preventDefault();
      $('.main-background').scrollTo($("#greetingcards"), 1000);
    });
    $("#shop-notecards").click(function(e) {
      e.preventDefault();
      $('.main-background').scrollTo($("#notecards"), 1000);
    });
    $("#shop-gifttags").click(function(e) {
      e.preventDefault();
      $('.main-background').scrollTo($("#gifttags"), 1000);
    });
    $("#shop-notebooksjournals").click(function(e) {
      e.preventDefault();
      $('.main-background').scrollTo($("#notebooksjournals"), 1000);
    });
    $("#shop-calendars").click(function(e) {
      e.preventDefault();
      $('.main-background').scrollTo($("#calendars"), 1000);
    });
    $("#shop-prints").click(function(e) {
      e.preventDefault();
      $('.main-background').scrollTo($("#prints"), 1000);
    });
  }
  else if (location.pathname === "/pretty-paper.html"){
    //if we the pretty-paper.html page don't need to scroll anywhere
    return;
  }
  else{
    $('.main-background').hide();
    //if we are not on the About.html page then we need to jump to the page and then
    //do a smooth scroll to the section we want
    // $('a[href^=#]').bind("click", jump);
  }
    if (location.hash){
        setTimeout(function(){
            $('.main-background').scrollTop(0).show();
            jump();
        }, 0);
    }else{
        $('.main-background').show();
    }
});

