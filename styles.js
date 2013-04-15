console.log('test');


$(document).ready(function() {

	$('.tab').click(function() {

		$('.tab').removeClass('tab-active');
		
		$(this).addClass('tab-active');

		var id = $(this).attr('id');

		$('.wrapper-main').removeClass('data-active');

		$('.' + id).addClass('data-active');
	})

})