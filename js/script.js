$(window).scroll(function(){
    if ($(window).scrollTop() >= 85) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});

$(function(){
    // $('.menu-ac').click(function(){
    //   $(this).next('.ac').slideToggle(500);
    // });

    $('.menu-ac').click(function(){
        $('.ac').slideToggle(500);
      });

      $(document).ready(function () {
        $(".klundesaga-title").click(function (e) {
        var klundesagaitem = $(this).attr("data-tab");
        $("#" + klundesagaitem)
        .slideToggle()
        .parent()
        .siblings()
        .find(".klundesaga-content")
        .slideUp();
      
        $(this).toggleClass("active-title");
        $("#" + klundesagaitem)
        .parent()
        .siblings()
        .find(".klundesaga-title")
        .removeClass("active-title");
      
        $("i.fa-chevron-down", this).toggleClass("chevron-top");
        $("#" + klundesagaitem)
        .parent()
        .siblings()
        .find(".klundesaga-title i.fa-chevron-down")
        .removeClass("chevron-top");
        });
        });
        
});