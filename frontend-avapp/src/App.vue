<template>
  <div class="mainContainer">
    <h1 class="hidden">Application Project</h1>

    <section class="container">
      <!-- <p class="messages">Welcome! Discover Your Music Taste!</p> -->
    </section>

    <router-view></router-view>
  </div>
</template>

<style>
.hidden {
  display: none;
}

.mainContainer {
  background-color: rgb(89, 89, 128);
  width: 1280px;
  height: 1080px;
  margin: 0 auto;
  color: white;
}

.container {
  margin: 0 auto;
  text-align: center;
  font-family: 'roboto';
}

.messages {
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 20px;
}
</style>

<script>
import Home from '@/views/Home.vue';

export default {
  name: 'App',

  views: {
    Home
  }
}
</script>