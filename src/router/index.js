import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/city'
import Details from '@/pages/details/details'
import List from '@/pages/list/list'
import LogIn from '@/pages/logIn/logIn'
import Register from '@/pages/register/register'
import Shopping from '@/pages/shopping/Shopping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/logIn',
      name: 'logIn',
      component: LogIn
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
