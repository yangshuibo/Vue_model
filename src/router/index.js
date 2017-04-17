import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Detail from '../views/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/index/:tab',name: 'Home',component: Home},
    {path: '/detail/:id',name: 'Detail',component: Detail},
    {path: '*', redirect: '/index/all'}
  ]
})