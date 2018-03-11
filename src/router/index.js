import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/city'
import Detail from '@/pages/details/Detail'
import List from '@/pages/list/list'
import LogIn from '@/pages/logIn/logIn'
import Register from '@/pages/register/register'
import Shopping from '@/pages/shopping/Shopping'

Vue.use(Router)

export default new Router({
  routes: [
    // {path:'',component:Home},//默认路由
    {path:'/',redirect:'/home'},//重定向
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
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
    },
    {
      path:'/home/:id',
      name:'home',
      component:Home,
      props:true,
      // beforeEnter: (to, from, next) => {
      //   console.log('马上要进入到详情页了')
      //   next()
      // }
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:Detail,
      props:true,
      // beforeEnter: (to, from, next) => {
      //   console.log('马上要进入到详情页了')
      //   next()
      // }
    },
    {
      path: '/logIn/:id',
      name: 'logIn',
      component: LogIn
    },

  ]
})
