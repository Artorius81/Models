var mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
	slider1 = new Swiper('.slider1', {
		freeMode: true,
		centeredSlides: true,
		mousewheel: true,
		slidesPerView: 0.65,
	})
}
else {
	slider1 = new Swiper('.slider1', {
		freeMode: true,
		centeredSlides: true,
		mousewheel: true,
		slidesPerView: 2.65,
	})}

const vid = document.querySelector(".video");
vid.addEventListener("timeupdate", (e) => {
  if (e.target.currentTime >= 10) {
    e.target.currentTime = 0.0;
  }
});

