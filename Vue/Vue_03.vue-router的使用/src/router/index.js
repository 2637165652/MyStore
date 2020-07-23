import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Message from '@/components/Message/Message'
import MyPage from '@/components/MyPage/MyPage'
import Record from '@/components/Record/Record'

Vue.use(Router)

//解决重复点击导航栏菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{
        name:'home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/myPage/:id',
      name: 'myPage',
      component: MyPage,
      props:{sex:'男',obj:{name:'lufy',age:17}}  //路由组件传参 可以是变量、对象、函数
    },
    {
      path:'/record',
      name:'record',
      component:Record
    }
  ]
})
