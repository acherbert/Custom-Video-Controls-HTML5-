window.onload = function() {

	// Video
	var video = document.getElementById("video");

    // FIRST TO TACKLE THE PLAY AND PAUSE BUTTONS. WE WILL SET UP AN EVEN LISTENER THAT WILL CHECK 
    // WHERTHER THE VIDEO IS CURRENTLY PLAYING AND THEN TOGGLES PLAYBACK APPROPRIATELY. 


	// Buttons
    var playButton = document.getElementById("play-pause");
    
    // NEXT UP, SETTING UP AN EVEN LISTERNER FOR THE CLICK EVENT ON THE PLAY/PAUSE BUTTON AND USED 
    //     AN IF STATEMENT TO TOGGLE VIDEO PLAYBACK. IT IS A SIMLIAR PROCESS TO THE PLAY/PAUSE BUTTON WE JUST DID


    var muteButton = document.getElementById("mute");
    
    // THEN OF COURSE THERE IS THE WONDERFULL FULL-SCREEN OPTION- WE ARE GOING TO SET UP ANOTHER EVENT
    // LISTERNER THAT WILL CALL THE REQUESTFULLSCREEN() FUNCTION WHEN TEH BUTTON IS CLICKED. 
	var fullScreenButton = document.getElementById("full-screen");


    // THEN WE ARE GOING TO ADD A SEEK BAR, LOADING, BAR, WHATEVER YOU WANT TO CALL IT. WE WILL SET UP AN
    //  EVENT LISTERNER ON THE SEEKBAR THAT WILL EXECUTE WHEN THE CHANGE EVENT IT FIRED. 

	// Sliders
    var seekBar = document.getElementById("seek-bar");
    
  
    // SAME THING WITH THE VOLUME BAR AND THEN IT JUST CONTINUES ON DEAALING WITH THE EVENTS AND
    // GETTING EVERYTHING SET UP FOR THE BUTTONS AND VOLUME CONTROLS.
	var volumeBar = document.getElementById("volume-bar");


	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();

			// Update the button text to 'Pause'
			playButton.innerHTML = "Pause";
		} else {
			// Pause the video
			video.pause();

			// Update the button text to 'Play'
			playButton.innerHTML = "Play";
		}
	});


	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			// Mute the video
			video.muted = true;

			// Update the button text
			muteButton.innerHTML = "Unmute";
		} else {
			// Unmute the video
			video.muted = false;

			// Update the button text
			muteButton.innerHTML = "Mute";
		}
	});


	// Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); // Firefox
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); // Chrome and Safari
		}
	});


	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time
		video.currentTime = time;
	});

	
	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;

		// Update the slider value
		seekBar.value = value;
	});

	// Pause the video when the seek handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
	});

	// Play the video when the seek handle is dropped
	seekBar.addEventListener("mouseup", function() {
		video.play();
	});

	// Event listener for the volume bar
	volumeBar.addEventListener("change", function() {
		// Update the video volume
		video.volume = volumeBar.value;
	});
}