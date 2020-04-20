$(document).ready(function(){
   $('.loader').hide();

   $('#mobile_menu').off('click').on('click',function(){
      $('#side-bar').css('right','0px');
   });

   $('#menu_close').off('click').on('click',function(){
      $('#side-bar').css('right','-350px');
   })
});