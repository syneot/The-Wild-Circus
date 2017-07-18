$(function(){ 
        $('h6').hide();
    
    $('.overlay').hover(function(){
            $('h6').show('slideDown');
        },
    function(){
        $('h6').hide('slideDown');
    });
                    
});