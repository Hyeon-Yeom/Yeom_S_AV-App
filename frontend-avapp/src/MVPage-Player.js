// const { BaseTransition } = require("vue");

// let nowplaying = document.querySelector('now-playing');
// let trackart = document.querySelector('.track-art');
// let trackname = document.querySelecor('.track-name');
// let trackartist = document.querySelector('.track-artist');

// let playpausebtn = document.querySelector('.playpause-track');
// let nextbtn = document.querySelector('.next-track');
// let prevbtn = document.querySelecotr('.prev-track');

// let seekslider = document.querySelector('.seek-slider');
// let volumeslider = document.querySelector('.volume-slider');
// let currtime = document.querySelector('.current-time');
// let totalduration = document.getElementById('wave');
// let randomIcon = document.querySelecor('.fa-random');
// let currTrack = document.createElement('audio');

// let trackIndex = 0;
// let isPlaying = false;
// let isRandom = false;
// let updateTimer;

// const musicList = [
//     {
//         img : '@/assets/images/album-cover-imagine-dragon.png',
//         name : 'Believer',
//         artist : 'Imagine Dragons',
//         music : '@/assets/audio/Imagine-Dragons-Believer.mp3'
//     },

//     {
//         img : '@/assets/images/album-cover-imagine-dragon.png',
//         name : 'Believer',
//         artist : 'Imagine Dragons',
//         music : '@/assets/audio/Imagine-Dragons-Believer.mp3'
//     },

//     {
//         img : '@/assets/images/album-cover-imagine-dragon.png',
//         name : 'Believer',
//         artist : 'Imagine Dragons',
//         music : '@/assets/audio/Imagine-Dragons-Believer.mp3'
//     }
// ]

//     loadTrack(trackIndex);

// function    loadTrack(trackIndex) {
//             clearInterval(updateTimer);
//             reset();

//             currTrack.src = musicList[trackIndex].music;
//             currTrack.load();

//             trackart.style.backgroundImage = "url(" + musicList[trackIndex].img + ")";
//             trackname.textContent = musicList[trackIndex].name;
//             trackartist.textContent = musicList[trackIndex].artist;
//             nowplaying.textContent = "Playing Music " + (trackIndex + 1) + " of " + musicList.length;

//             updateTimer = setInterval(setUpdate, 1000);

//             currTrack.addEventListener('ended', nextTrack);
//             random_bg_color();
// }

// function random_bg_colr() {
//     let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
//     let a;

//     function populate(α) {
//         for(let i=0, i<6; i++) {
//             let x = Math.round(Math.random() * 14);
//             let y = hex[x];

//             α += y;
//         }

//         return α;
//     }

//     let Color1 = populate('#');
//     let Color2 = populate('#');
//     var angle = 'to right';
    
//     let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
//     document.body.style.background = gradient;
// }

// function reset() {
//     currtime.textContent = "00:00";
//     totalduration.textContent = "00:00";
//     seekslider.value = 0;
// }

// function randomTrack() {
//     isRandom ? pauseRandom() : playRandom();
// }

// function playRandom() {
//     isRandom = true;
//     randomIcon.classList.add('randomActive');
// }

// function pauseRandom() {
//     isRandom = false;
//     randomIcon.classList.remove('randomActive');
// }

// function repeatTrack() {
//     let currentIndex = trackIndex;
//     loadTrack(currentIndex);
//     playTrack();
// }

// function playpauseTrack() {
//     isPlaying ? pauseTrack() : playTrack();
// }

// function playTrack() {
//     currTrack.play();
//     isPlaying = true;
//     trackart.classList.add('rotate');
//     wave.classList.add('loader');
//     playpause_btn.innerHTML = '<i class="fa fa-pause fa-5x"></i>';
// }