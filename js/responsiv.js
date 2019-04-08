$(function (){
    $('.nav_bar .nav_bar_item').mouseover(function (){
       if($(window).width() <= 900) 
            $('body > header .search_box .form-control:visible').hide(); 
        
       $('.nav_bar .nav_bar_item .sub_menu:visible').hide();
       $(this).find('.sub_menu').show();
    });
    
    isNavBarMenuHidden = true;
    $('body > header .search_box .menu_icon').click(function (){
        $('body > header .search_box .form-control:visible').hide(); 
        if(isNavBarMenuHidden){
          $('.nav_bar').fadeIn("slow");
          isNavBarMenuHidden = false;
      }
      else{
          $('.nav_bar').fadeOut("slow");
          isNavBarMenuHidden = true;
      }
   });
   
   isSearchBoxHidden = true;
    $('body > header .search_box .search_box_icon').click(function (){
        $('.nav_bar:visible').hide();
        if(isSearchBoxHidden){
          $('body > header .search_box .form-control').fadeIn("slow");
          isSearchBoxHidden = false;
      }
      else{
          $('body > header .search_box .form-control').fadeOut("slow");
          isSearchBoxHidden = true;
      }
   });
});