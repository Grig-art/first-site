
$('.header__button').on('click', function () {
  	$('.menu__item').toggleClass('menu__list--active');	
});

    
$(document).ready(function(){
	$('.header__button').click(function(){
		$(this).toggleClass('open');
	});
});

