//Import Components
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home' 
import Faq from  '@/components/Faq'
import OneDriveLogin from '@/components/OneDriveLogin'
import Features from '@/components/Features'

//Use Plugins by Calling the Vue.use() Global Method
Vue.use(Router) //

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/faq',
      name: 'Faq',
      component : Faq
    },
    {
      path: '/oneDriveLogin',
      name: 'OneDriveLogin',
      component: OneDriveLogin
    },
    {
      path: '/features',
      name: 'Features',
      component: Features
    }
  ]
})
