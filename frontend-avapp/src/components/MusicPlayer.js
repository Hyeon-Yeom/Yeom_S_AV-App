const video = document.getElementById('video');
const prev_track = document.getElementByClass('prev-track');
const pause_track = document.getElementByClass('playpause-track');
const next_track = document.getElementByClass('next-track');
// const timeStamp = document.getElementByClass('total-duration');

function toggleVideoStatus() {
    if(video.paused) {
        video.play()
    } else {
        video.pause();
    }
}

function updatePlayIcon() {
    return true;
}

function updateProgress() {
    return true;
}

function setVideoProgress() {
    return true;
}

function stopVideo() {
    return true;
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

prev_track.addEventListener('click', toggleVideoStatus);
pause_track.addEventListener('click', stopVideo);

next_track.addEventListener('change', setVideoProgress);