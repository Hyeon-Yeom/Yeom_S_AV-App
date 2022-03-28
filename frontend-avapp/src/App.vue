<template>
  <div class="mainContainer">
    <h1 class="hidden">Application Project</h1>
    <router-view></router-view>
  </div>
</template>

<style>
.hidden {
  display: none;
}

.mainContainer {
  width: 1280px;
  margin: 0 auto;
  color: #000;
  font-weight: thin;
}

.mainContainer h1 {
  color: rgb(91, 159, 214);
  font-weight: 300;
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