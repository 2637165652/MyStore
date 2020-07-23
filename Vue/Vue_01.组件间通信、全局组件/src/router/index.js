import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import Lunbotu from '@/components/Home/Lunbotu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lunbotu',
      name: 'Lunbotu',
      component: Lunbotu
    }
  ]
})
