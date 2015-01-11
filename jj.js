
$(document).ready(function() {

 $('#red').slideDown(2000);
  $('#blue').slideDown(2000);
   $('#yellow').slideDown(2000);
     
});
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('.pic').click(function() {
       $(".pic").css({height:'200px'});
   }); 
});
