<template>
  <div id="myPage">
      <h3>我是个人主页</h3>
        <h3>{{sex}}</h3>
        <h3>{{obj}}</h3>
  </div>
</template>

<script>
export default {
    name:'MyPage',
    created(){
        console.log(this.$route.params.id);
    },
    props:['sex','obj'],    //接收来自路由组件传参
    created(){
        // console.log(this.sex);
    }

}
</script>

<style>

</style>