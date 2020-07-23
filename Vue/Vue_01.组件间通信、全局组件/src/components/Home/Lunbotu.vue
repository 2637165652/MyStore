<template>
  <div id="lunbotu">
      <Navbar title="我是轮播图导航栏"/>
      <div>{{msg}}</div>
      <!-- <input v-model=""> -->
      <div>{{childData}}</div>
      <button @click="sendDataHandler">轮播图组件传数据给APP组件</button>
  </div>
</template>

<script>
export default {
    name:'Lunbotu',
    data(){
        return{
            
            msg:'我是轮播图',
            toFather:'子传父-this.$emit'
        }
    },
    props:['childData'],
    created(){
        this.$emit('dataFromChild',this.toFather);
    },
    methods:{
        sendDataHandler(){
            //通过bus总线触发事件
            this.$bus.$emit('sendData',this.msg+'bus总线');
        }
    }
}
</script>

<style>
    #lunbotu{
        border:1px red solid;
        width:50%;
        /* margin:0 auto; */
        display:inline-block;
        
    }
</style>