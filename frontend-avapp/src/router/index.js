import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Main from '../components/Main.vue';
import MVPage from '../components/MVPage.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },

  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path: '/home/mv',
    name: 'MVPage',
    component: MVPage
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router