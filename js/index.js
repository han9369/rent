$(document).ready(function() {

    $('.bu1').click(function() {
        $('.welcome-page')
        .css({
          'display': 'none',
        });

        $('.rent')
        .css({
          'display': 'block',
        });
    });

    $('.bu2').click(function() {
        $('.welcome-page')
        .css({
          'display': 'none',
        });

        $('.rent')
        .css({
          'display': 'none',
        });

        $('.for-rent')
        .css({
          'display': 'block',
        });
    });


}); 