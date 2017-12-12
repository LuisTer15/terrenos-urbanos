$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#navbar_changer');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.header').toggleClass("header header_white");
          $('.button_login').toggleClass("button_login button_login_inverse");
          $('.button_demo').toggleClass("button_demo button_demo_inverse");
       } else {
          $('.header_white').toggleClass("header_white header");
          $('.button_login_inverse').toggleClass("button_login_inverse button_login");
          $('.button_demo_inverse').toggleClass("button_demo_inverse button_demo");
       }
   });
});