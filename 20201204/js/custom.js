$(document).ready(function(){
	$("nav ul.gnb>li").hover(function(){
		$(this).find("ul.sub").stop().slideDown();
	}, function(){
		$(this).find("ul.sub").stop().slideUp();
	});

	$("ul.slide_all li").eq(0).siblings().hide();

	var slideI=0;
	setInterval(function(){
		if (slideI<2) {slideI++;} else {slideI=0;}

		console.log("slide_all li");
		$("ul.slide_all li").eq(slideI).siblings().fadeOut(500);
		$("ul.slide_all li").eq(slideI).fadeIn(500);

	},3000);



}); //ready end