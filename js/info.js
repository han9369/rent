$(document).ready(function() {

   $('#show-btn').click(function() {
        // console.log("show button clicked");
         $('.blockcontent4')
        .css({
          'display': 'block',
        });
        
    });

   $('#hide-btn').click(function() {
        // console.log("show button clicked");
         $('.blockcontent4')
        .css({
          'display': 'none',
        });
        
    });


});