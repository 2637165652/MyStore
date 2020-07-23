<template>
  <div id='Navbar'>
      <h3>{{title}}</h3>
  </div>
</template>


<script>
// 全局组件到 main.js 挂载
export default {
    name:'Navbar',
    data(){
        return{
            // title:''
        }
    },
    props:['title']

}
</script>

<style lang="css" scoped>
    h3{
        text-align: center;
    }
</style>