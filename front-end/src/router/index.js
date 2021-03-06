import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Philosophy from '../views/Philosophy.vue'
import SStories from '../views/SStories.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    alias: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Philosophy',
    name: 'Philosophy',
    component: Philosophy
  },
  {
    path: '/Stories',
    name: 'Stories',
    component: SStories
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
