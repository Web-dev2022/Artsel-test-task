$( document ).ready( function(S) {

  $('#mobile-menu-btn').click(function(){
		$(this).toggleClass('active');
		$('#mobile-menu').toggleClass('active');
		$('body').toggleClass('overflow');
	});

});