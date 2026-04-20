// JavaScript for Ayat Presentation

const playButton = document.getElementById("play");
const audio = new Audio();
const progressBar = document.querySelector(".progress-bar");
const time = document.querySelector(".time");

let isPlaying = false;

// Load MP3 via API Fetch
function fetchAudio(verseId) {
    fetch(`https://api.alquran.cloud/v1/ayah/${verseId}/ar.alafasy`)
      .then(response => response.json())
      .then(data => {
        audio.src = data.audio;
      });
}

// Play or Pause functionality
playButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
});

audio.addEventListener("timeupdate", () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime % 60);
    time.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
});