





// Switch buttons style change
const switchToNotesBtn = document.querySelector('.btn-notes');
const switchToLettersBtn = document.querySelector('.btn-letters');
const btnActive = 'btn-active';

switchToNotesBtn.addEventListener('click', () => {
	switchToLettersBtn.classList.remove(btnActive);
	switchToNotesBtn.classList.add(btnActive);
});

switchToLettersBtn.addEventListener('click', () => {
	switchToNotesBtn.classList.remove(btnActive);
	switchToLettersBtn.classList.add(btnActive);
});



// Fullscreen button
const fullscreenBtn = document.querySelector('.fullscreen');
fullscreenBtn.addEventListener('click', () => {
	if(!fullscreenBtn.classList.contains('active')) {
		enterFullscreen();
		fullscreenBtn.classList.add('active');
	} else {
		exitFullscreen();
		fullscreenBtn.classList.remove('active');
	}
});

function enterFullscreen() {
	if(document.documentElement.requestFullscreen) {
		document.documentElement.requestFullscreen();
	} else if(document.documentElement.mozRequestFullscreen) {
		document.documentElement.mozRequestFullscreen();
	} else if(document.documentElement.msRequestFullscreen) {
		document.documentElement.msRequestFullscreen();
	} else if(document.documentElement.webkitRequestFullscreen) {
		document.documentElement.webkitRequestFullscreen();
	}
}

function exitFullscreen() {
	if(document.exitFullscreen) {
		document.exitFullscreen();
	} else if(document.mozCancelFullscreen) {
		document.mozCancelFullscreen();
	} else if(document.msExitFullscreen) {
		document.msExitFullscreen();
	} else if(document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	}
}