var mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
	slider1 = new Swiper('.slider1', {
		freeMode: true,
		centeredSlides: true,
		mousewheel: true,
		slidesPerView: 0.85,
	})
}
else {
	slider1 = new Swiper('.slider1', {
		freeMode: true,
		centeredSlides: true,
		mousewheel: true,
		slidesPerView: 2.85,
	})}

const vid = document.querySelector(".video");
vid.addEventListener("timeupdate", (e) => {
  if (e.target.currentTime >= 10) {
    e.target.currentTime = 0.0;
  }
});

  player.on('touchstart', function (e) {
        if (e.target.nodeName === 'VIDEO') {
            if (player.paused()) {
                this.play();
            } else {
                this.pause();
            }
        }
    });
