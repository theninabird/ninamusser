$(document).ready(function() {
	$('.dropdown-parent').click(
		function(){
			$(this).children('.sub-menu').slideToggle(100);
		}
	);

    $('.menu-icon').click(
    	function(){
        	$('.dropdown').slideToggle(100);
    	}
	);

	$('#backtotop').on('click', function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
		$('#backtotop').fadeOut();
		return false;
	});
});

$(window).on('scroll', function(){
	if ( $('#backtotop').is(":hidden") ) {
		setTimeout(function(){
			$('#backtotop').css('display', 'flex');
		}, 1000);
	}

	if ( scrollTop == 0 ) {
		$('#backtotop').fadeOut();
	}
});