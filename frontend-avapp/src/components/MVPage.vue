<template>
    <div class="mainContainer">
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        <h1 class="hidden">This is home page</h1>

        <nav class="nav">
            <i class="back-btn-custom glyphicon glyphicon-chevron-left" @click="Back"></i>
            <!-- <i class="back-btn-custom fa fa-sign-out" @click="Back"></i> -->
            <!-- <button class="back-btn-custom" @click="Back">Go Back</button> -->
            <div class="appTitle">
                <p>White Musix Box</p>
            </div>
        </nav>

        <div class="musicContainerHeading">
            <div class="musicContainer">
                <img class="album-custom" src="@/assets/images/album-cover-imagine-dragon.png" alt="">
                <div class="song-info">
                    <h1>Believer</h1>
                    <h2>From The Album Evolve</h2>
                </div>
            </div>

            <div class="headingSongInfo">
                <p class="singer songInfo"># Imagine Dragons</p>
                <p class="songInfo"># Pop</p>
                <p class="songInfo"># Arena Rock</p>
            </div>
        </div>

        <div class="musicVideoBox">
            <video
                id = "video"
                class="musicVideo"
                poster=""
                src="@/assets/video/Imagine-Dragons-Believer.mp4">
            </video>

            <div class="controller">
                <div class="controllerProgressBar">
                    <div class="current-time">00:00</div>
                    <input type="range" min="1" max="100" step="0.1" value="0" class="video-slider" onchange="seekTo()">
                    <div class="total-duration">00:00</div>
                </div>
                
                <div class="controllerBtns">
                    <button class="random-track" onclick="randomTrack()">
                        <i class="fa fa-random fa-2x" title="random" style="font-size: 20px"></i>
                    </button>

                    <button class="prev-track" onclick="prevTrack()">
                        <i class="fa fa-backward" style="font-size: 20px"></i>
                    </button>

                    <button class="pause-track" onclick="pauseTrack()">
                        <i class="fa fa-pause" style="font-size: 20px"></i>
                    </button>

                    <button class="next-track" onclick="nextTrack()">
                        <i class="fa fa-forward" style="font-size: 20px"></i>
                    </button>

                    <button class="repeat-track" onclick="repeatTrack()">
                        <i class="fa fa-repeat fa-2x" title="repeat" style="font-size: 20px"></i>
                    </button>
                </div>
            </div>

            <div class="lyrics">
                
            </div>
        </div>
    </div>
</template>

<style>
    .album-custom {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 2px solid #fff;
        background-size: cover;
        background-position: center;
        /* -moz-box-shadow: 0 4px 4px 5px #ccc; */
        -webkit-box-shadow: 0 4px 4px 3px #ccc;
        box-shadow: 0 6px 5px #ccc;
    }

    .musicContainerHeading {
        margin: 150px auto 0 auto;
    }

    .musicContainer h1 {
        font-weight: 300;
        font-size: 50px;
        color: #4286f4;
        margin-bottom: 0px;
    }

    .musicContainer h2 {
        opacity: 0.4;
        font-weight: 400;
        font-size: 15px;
        line-height: 30px;
        letter-spacing: .5px;
        color: #4286f4;
    }

    .musicContainer h1, .musicContainer h2 {
        margin-left: 30px;
    }

    .musicContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
    
    .headingSongInfo {
        margin-top: 50px;
        margin-bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .songInfo {
        cursor: pointer;
        font-weight: 400;
        color: #f4f8ff;
        padding: 5px 15px;
        border-radius: 50px;
        background: #4286f4;
        margin-right: 10px;
        margin-bottom: 30px;
    }

    .songInfo:hover {
        background: #f4f8ff;
        color: #4286f4;
        transition: all ease-in .1s;
    }

    .musicVideo {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        width: 720px;
        border-radius: 20px;
    }

    .controllerProgressBar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px auto 0 auto;
    width: 720px;
    align-items: center;
    cursor: pointer;
}

    .video-slider {
        appearance: none;
        border-radius: 50px;
        height: 5px;
        background: rgba(91, 159, 214, .3);
        transition: opacity .2s;
    }

    .controllerBtns {
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

    .controllerBtns button {
        background: none;
        border: none;
        margin-top: 1px;
    }

    .controllerBtns button i:hover {
        color: #4286f4;
        opacity: .7;
        transition: all ease-in;
    }

    .btn:focus {
        outline: 0;
    }
</style>

<script>
export default {
    name: "MV Page",

    methods: {
        goBackToHome() {
        this.$router.push({ name: "Home" })
        }
    },

    mounted() {
        const video = document.getElementById('video');
        const prev_track = document.querySelector('.prev-track');
        const pause_track = document.querySelector('.pause-track');
        const next_track = document.querySelector('.next-track');
        // const timeStamp = document.getElementByClass('total-duration');

        function toggleVideoStatus() {
            if(video.paused) {
                video.play()
            } else {
                video.pause();
            }
        }

        function updatePlayIcon() {
            if(video.paused) {
                pause_track.innerHTML = '<li class="fa fa-play"></li>'
            } else {
                pause_track.innerHTML = '<li class="fa fa-pause"></li>'
            }
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
    }
}
    
</script>