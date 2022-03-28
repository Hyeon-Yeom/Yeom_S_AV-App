<template>
  <div class="mainContainer">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <h1 class="hidden">This is home page</h1>

    <nav class="nav">
      <i class="back-btn-custom fa fa-sign-out" @click="Back"></i>
      <!-- <button class="back-btn-custom" @click="Back">Go Back</button> -->
      <div class="appTitle">
        <p>White Musix Box</p>
      </div>
    </nav>

    <hr class="line-custom">

    <div class="biggestHits">
      <h2 class="container-title">This Week's Biggest Hits</h2>
      <div class="biggestHits-img">
        <img class="album-image" src="@/assets/images/album-cover-imagine-dragon.png" alt="">
      </div>
    </div>
  </div>
</template>

<style>
div {
  font-family: 'roboto';
}

.nav {
  height: 100px;
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

.container-title {
  margin-top: 80px;
  margin-left: 20px;
  font-weight: 300;
  font-size: 20px;
}

.fa-sign-out {
  font-size: 36px;
}

.back-btn-custom {
  align-items: left;
  margin-left: 30px;

  /* background-color: rgb(91, 159, 214); */
  color: rgb(91, 159, 214);
  padding: 15px 15px;
  border-radius: 50px;
  border: none;
}

.back-btn-custom:hover {
  color: white;
  background-color: rgb(26, 69, 104);
  /* box-shadow: 3px 5px black; */
  cursor: pointer;
  transition: all ease-in .2s;
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