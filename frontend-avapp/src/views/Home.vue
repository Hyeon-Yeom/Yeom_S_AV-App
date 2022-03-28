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

    <hr class="line-custom">

    <div class="musicContainers">
      <div class="biggestHits">
        <h2 class="container-title">This Week's Biggest Hits</h2>
        <p class="imagineDragons">Imagine Dragons</p>
        <div class="extraInfo">
          <p class="genre"># Pop</p>
          <p class="genre"># Rock</p>
          <p class="genre"># Electropop Pop</p>
          <p class="genre"># Indie Pop</p>
          <p class="genre"># Arena Rock</p>
          <p class="genre"># Alternative Rock</p>
        </div>
        <div class="biggestHits-img">
          <img @click="watchMV" class="album-image" src="@/assets/images/album-cover-imagine-dragon.png" alt="">
          <img class="album-image" src="@/assets/images/ImagineDragons-Mercury.jpg" alt="">
          <img class="album-image" src="@/assets/images/ImagineDragons-NightVision.jpg" alt="">
          <img class="album-image" src="@/assets/images/ImagineDragons-smokeMirrors.jpg" alt="">
          <img class="album-image" src="@/assets/images/ImagineDragons-theFall.jpg" alt="">
        </div>
      </div>

      <div class="musicPlayer">
        <div class="wrapper">
          <div class="details">
            <div class="track-art"></div>
            <div class="track-name">Track Name</div>
            <div class="track-artist">Track Artist</div>
          </div>

          <div class="sliders">
            <div class="slider-container">
              <div class="current-time">00:00</div>
                <input type="range" min="1" max="100" value="0" class="seek-slider" onchange="seekTo()">

                <div class="total-duration">00:00</div>
            </div>

            <div class="slider-container">
              <i class="fa fa-volume-down"></i>
              <input type="range" min="1" max="100" value="99" class="volume-slider" onchange="setVolume()">
              <i class="fa fa-volume-up"></i>
            </div>
          </div>

          <div class="buttons">
            <div class="random-track" onclick="randomTrack()">
              <i class="fa fa-random fa-2x" title="random" style="font-size: 20px"></i>
            </div>

            <div class="prev-track" onclick="prevTrack()">
              <i class="fa fa-backward" style="font-size: 20px"></i>
            </div>

            <div class="playpause-track" onclick="playpauseTrack()">
              <i class="fa fa-pause" style="font-size: 20px"></i>
            </div>

            <div class="next-track" onclick="nextTrack()">
              <i class="fa fa-forward" style="font-size: 20px"></i>
            </div>

            <div class="repeat-track" onclick="repeatTrack()">
              <i class="fa fa-repeat fa-2x" title="repeat" style="font-size: 20px"></i>
            </div>
          </div>

          <div id="wave">
              <span class="stroke"></span>
              <span class="stroke"></span>
              <span class="stroke"></span>
              <span class="stroke"></span>
              <span class="stroke"></span>
              <span class="stroke"></span>
              <span class="stroke"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
div {
  font-family: 'roboto';
}

.nav {
  height: 120px;
  background: rgb(176, 219, 255);
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
}

.appTitle {
  margin: 0 auto;
  font-size: 25px;
  font-weight: 500;
  color: rgb(91, 159, 214);
  align-items: center;
}

.line-custom {
  display: none;
  margin-top: 30px;
  width: 1280px;
  border: .5px solid rgba(91, 159, 214, .3);
}

.back-btn-custom {
  align-items: left;
  margin-left: 30px;
  /* background-color: rgb(91, 159, 214); */
  font-size: 25px;
  color: rgb(91, 159, 214);
  padding: 15px 15px;
  border-radius: 50px;
  border: none;
}

.back-btn-custom:hover {
  color: rgb(26, 69, 104);
  /* box-shadow: 3px 5px black; */
  cursor: pointer;
  transition: all ease-in .2s;
}

.musicContainers {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.biggestHits h2 {
  width: 270px;
  margin-left: 1px;
  margin-top: 50px;
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 20px;
  background: #e8f1ff;
  color: rgb(91, 159, 214);
  border-radius: 50px;
  padding: 10px 25px;
}

.imagineDragons {
  width: 145px;
  font-size: 15px;
  font-weight: 400;
  color: white;
  padding: 5px 15px;
  background: #4286f4;
  border-radius: 50px;
  cursor: pointer;
}

.imagineDragons:hover {
  background: #f4f8ff;
  color: #4286f4;
  transition: all ease-in .1s;
}

.extraInfo {
  display: flex;
  flex-direction: row;
}

.genre {
  cursor: pointer;
  font-weight: 400;
  color:#4286f4;
  padding: 5px 15px;
  border-radius: 50px;
  background: #f4f8ff;
  margin-right: 10px;
  margin-bottom: 30px;
}

.genre:hover {
  background: #4286f4;
  color: #f4f8ff;
  transition: all ease-in .1s;
}

.biggestHits-img img {
  border-radius: 10px;
  width: 200px;
  cursor: pointer;
}

.biggestHits-img img:hover {
  /* filter: grayscale(50%); */
  border-radius: 100px;
  box-shadow: rgb(161, 211, 255) 5px 5px 15px;
  transition: all ease-in .1s;
  animation: rotating 5.5s infinite linear;
}

.album-image {
  margin-right: 20px;
  margin-bottom: 20px;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.musicPlayer {
  display: flex;
  justify-content: right;
}

.wrapper {
  border-radius: 20px;
  width: 350px;
  height: 450px;
  margin-top: 50px;
  border: 1px solid transparent;
  box-shadow: rgba(91, 159, 214, .2) 0px 19px 38px;
}

.details {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.track-art {
  margin: 25px;
  height: 150px;
  width: 150px;
  border: 2px solid #fff;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  -webkit-box-shadow: 0 4px 4px 3px rgba(91, 159, 214, .2);
  box-shadow: 0 6px 5px rgba(91, 159, 214, .2);
}

.now-playing {
  font-size: 1.5rem;
}

.track-artist {
  margin-top: 5px;
  font-size: 1.5rem;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px auto;
  opacity: 1;
}

.active {
  color: black;
}

.repeat-track,
.random-track,
.playpause-track,
.prev-track,
.next-track {
  padding: 25px;
  opacity: 0.8;
  transition: opacity .2s;
}

.repeat-track:hover,
.random-track:hover,
.playpause-track:hover,
.prev-track:hover,
.next-track:hover {
  opacity: 1.0;
}

.sliders {
  margin-top: 30px;
}

.slider-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.seek-slider,
.volume-slider {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 50px;
  height: 5px;
  background: rgba(91, 159, 214, .3);
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.seek-slider::-webkit-slider-thumb,
.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  background: white;
  border: 3px solid rgb(91, 159, 214);
  cursor: pointer;
  border-radius: 100%;
}

.seek-slider {
  width: 50%;
}

.volume-slider {
  width: 20%;
}

.current-time,
.total-duration {
  padding: 10px;
}

i.fa-volume-down,
i.fa-volume-up {
  padding: 10px;
}

i,
i.fa-play-circle,
i.fa-pause,
i.fa-forward,
i.fa-backward {
  cursor: pointer;
}

.randomActive {
  color: black;
}

.rotate {
  animation: rotation 8s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

.Loader {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Loader .stroke {
  background: #f1f1f1;
  height: 150%;
  width: 10px;
  border-radius: 50px;
  margin: 0 50px;
  animation: animate 1.4s linear infinite;
}

@keyframes animate {
  50% {
    height: 20%;
    background: #4286f4;
  }

  100% {
    height: 100%;
  }
}

.stroke:nth-child(1) {
  animation-delay: 0s;
}

.stroke:nth-child(2) {
  animation-delay: 0.3s;
}

.stroke:nth-child(3) {
  animation-delay: 0.6s;
}

.stroke:nth-child(4) {
  animation-delay: 0.9s;
}

.stroke:nth-child(5) {
  animation-delay: 0.6s;
}

.stroke:nth-child(6) {
  animation-delay: 0.3s;
}

.stroke:nth-child(7) {
  animation-delay: 0s;
}
</style>

<script>
export default {
  name: 'Home',

  methods: {
    Back() {
      this.$router.push({ name: "Main" })
      },

    watchMV() {
      this.$router.push({ name: "MVPage" })
    }
  }
}
</script>