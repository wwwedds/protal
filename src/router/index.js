import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Msite from '../views/msite.vue'
import Tabs from '../views/tabs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: '首页',
    component: Home
  },
  {
    path: '/msite',
    name: '首页',
    component: Msite
  },
  {
    path: '/tabs',
    name: '标签',
    component: Tabs
  }

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
