import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        count:0
    },
    //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation.
    //每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
    //这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
    mutations: {
      increment(state) {
        state.count++
      },
      //传入额外的参数,即载荷payload
      subtractment(state,n){
        state.count-= n;
      },
      // 在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读
      incre2ment(state,payload){
        state.count+=payload.n;
      }


    }
})

export default store