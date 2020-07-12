(() => {

console.log('fired!');

let lightBox = document.querySelector(".lightbox"),
	lbClose = lightBox.querySelector("span"),
	lbVideo = lightBox.querySelector("video"),
	sigils = document.querySelectorAll(".sigilContainer");

function showHideLightbox() {
	lightBox.classList.toggle('show-lightbox');

	//try making the video play as well

	//check the play state of the video.
	//if it's paused or not playing, that means we just opened the lightbox
	//and we want the video to play
	if (lbVideo.paused) {
		lbVideo.play();
	} else {
		//lightbox is open and we want to rewind and stop wheen we close it
		lbVideo.currentTime = 0;
	    lbVideo.pause();
	}
	

	//rewind the video and make it pause at current time of 0
	
}


// function hideLightbox() {
// 	lightBox.classList.remove('show-lightbox');
// }


sigils.forEach(sigil => sigil.addEventListener("click", showHideLightbox));
lbClose.addEventListener("click", showHideLightbox);

// add an "ended" event handler for the video -> close the lightbox
lbVideo.addEventListener("ended", showHideLightbox);
})();