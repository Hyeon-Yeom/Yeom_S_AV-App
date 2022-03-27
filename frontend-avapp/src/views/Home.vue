<template>
  <div class="mainContainer">
    <h1 class="hidden">This is home page</h1>

    <nav class="nav">
      <button class="back-btn-custom" @click="Back">BACK</button>
    </nav>

    <div class="random-track" onclick="randomTrack()">
                            <i class="fas fa-random fa-2x" title="random"></i>
                        </div>

    <!-- <div class="recentlyWatched">
      <h2 class="container-title">Recently Watched</h2>
    </div> -->

    <div class="biggestHits">
      <h2 class="container-title">This Week's Biggest Hits</h2>
      <div class="biggestHits-img">
        <img class="album-image" src="@/assets/images/album-cover-imagine-dragon.png" alt="">
      </div>
    </div>

    <h2 class="container-title"></h2>
    
  </div>
</template>

<style>
div {
  font-family: 'roboto';
}

.container-title {
  margin-top: 80px;
  margin-left: 20px;
  font-weight: 300;
  font-size: 20px;
}

.back-btn-custom {
  align-items: left;
  margin-left: 20px;
  margin-top: 20px;

  background-color: rgb(56, 36, 56);
  color: white;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 15px 20px;
  border-radius: 50px;
  border: none;
}

.back-btn-custom:hover {
  background-color: rgb(151, 96, 151);
  /* box-shadow: 3px 5px black; */
  cursor: pointer;
  transition: all ease-in .1s;
}
</style>

<script>
export default {
  name: 'Home',

  methods: {
    Back() {
        this.$router.push({ name: "Main" })
        }
  }
}
</script>