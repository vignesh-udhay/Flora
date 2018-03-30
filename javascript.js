$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.title').css({
		'transform' :'translate(0px, '+ wScroll /4+'%)'
	});

	$('.words').css({
		'transform' :'translate(0px, -'+ wScroll /24+'%)'
	});

// intro section animation //

	if(wScroll > $('.txt_view').offset().top - 300) {

		$('.view_title').addClass('show_title');
		$('.line_bg').addClass('show_line');
		$('.view_txt').addClass('show_text');

	}
	
	if (wScroll > $('.pics').offset().top - 300) {

		$('.gallery-title').addClass('show-gallery-title');
		$('.gallery-line').addClass('show-gallery-line');
		$('.gallery-box .box').addClass('show-box');
	}

	if (wScroll > $('.featured').offset().top - 300) {

		$('.featured-title').addClass('show-featured-title');
		$('.featured-line').addClass('show-featured-line');
		$('.contain').addClass('show-contain');
	}
	
	if (wScroll > $('.article').offset().top - 300) {

		$('.article-title').addClass('show-article-title');
		$('.article-line').addClass('show-article-line');
		$('.art-1').addClass('show-art-1');
		$('.art-2').addClass('show-art-2');
	}

});
