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
});