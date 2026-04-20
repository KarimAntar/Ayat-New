document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play');
    const audio = new Audio();
    const progressBar = document.querySelector('.progress-bar');

    let audioPlaying = false;
    
    // Fetch Quranic verse audio dynamically
    function setAudio(verseId) {
        fetch(`https://api.alquran.cloud/v1/ayah/${verseId}`)
            .then(response => response.json())
            .then(result => {
                audio.src = result.data.audio;
            });
    }

   updateAndControlled .Behind wData-Reach only } 