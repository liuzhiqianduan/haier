$(function(){
    loads();
    new Swiper(".swiper-container", {
		pagination: ".swiper-pagination",
		paginationElement: "li",
		autoplay: 3000,
		loop: !0
	});
});
