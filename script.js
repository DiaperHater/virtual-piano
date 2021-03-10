





window.addEventListener('keydown', (event) => {
	pianoKeys.forEach( key => {
		if('Key' + key.dataset.letter === event.code) {
			playKey(key);
		}
		
	});
});

function playKey(key) {
	pianoKeys.forEach(k => k.classList.remove(keyActive));
	key.classList.add(keyActive);
	playNote(key.dataset.note);
}


//Piano keys
const piano = document.querySelector('.piano')
const pianoKeys = document.querySelectorAll('.piano-key');
const keyActive = 'piano-key-active';

piano.addEventListener('click', (event) => {
	if(event.target.classList.contains('piano-key')) {
		playKey(event.target);
	}
});


function playNote(note) {
	const audio = new Audio();
	audio.src = `assets/audio/${note}.mp3`;
	audio.currentTime = 0;
	audio.play();
}

// Switch buttons style change
const switchToNotesBtn = document.querySelector('.btn-notes');
const switchToLettersBtn = document.querySelector('.btn-letters');
const btnActive = 'btn-active';

switchToNotesBtn.addEventListener('click', () => {
	switchToLettersBtn.classList.remove(btnActive);
	switchToNotesBtn.classList.add(btnActive);

	pianoKeys.forEach(key => key.classList.remove('piano-key-letter'));
});

switchToLettersBtn.addEventListener('click', () => {
	switchToNotesBtn.classList.remove(btnActive);
	switchToLettersBtn.classList.add(btnActive);

	pianoKeys.forEach(key => key.classList.add('piano-key-letter'));
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