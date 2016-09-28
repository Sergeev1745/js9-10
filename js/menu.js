$(document).ready(function(){
	$( '.dropdown' ).hover(
            function(){
            	var sub = $(this).children('.sub-menu');
                sub.fadeIn(400);
                
            },
            function(){
                $(this).children('.sub-menu').fadeOut(400);
            });
	$("nav li").hover(function(){
		$(this).css('background-color' , '#90E4BF');
	},
	function(){
		$(this).css('background-color' , '#90D3BF');
	}
	)


});