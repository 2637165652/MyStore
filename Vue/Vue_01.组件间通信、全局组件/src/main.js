// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


//注册全局的组件
import Navbar from '@/components/Common/Navbar'
Vue.component(Navbar.name,Navbar);

//将bus对象挂载到Vue的原型上
import EventBus from './EventBus'
Vue.prototype.$bus=EventBus;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
