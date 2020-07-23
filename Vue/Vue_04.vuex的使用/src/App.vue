<template>
  <div id="app">

    <!-- 使用router属性  -->
    <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" router  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" mode="horizontal" @select="handleSelect">
            <el-menu-item index="home" >首页</el-menu-item>
            <el-menu-item index="message" >消息中心</el-menu-item>
            <el-menu-item index="myPage" >我的主页</el-menu-item>
            <el-menu-item index="4" disabled><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu> -->

    <!-- 使用watch监听属性 -->
    <el-menu :default-active="activeIndex" class="el-menu-demo"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" mode="horizontal" @select="handleSelect">
            <el-menu-item index="home" >首页</el-menu-item>
            <el-menu-item index="message" >消息中心</el-menu-item>
            <el-menu-item index="myPage" >我的主页</el-menu-item>
            <el-menu-item index="record">家教记录</el-menu-item>
    </el-menu>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      activeIndex: 'home'
    }
  },
  methods:{
    handleSelect(index, indexPath) {
        this.activeIndex=index;
        // console.log(this.activeIndex);
         
    }
  },
  //
  watch:{
    activeIndex:function(newV,oldV){
      this.$router.push({name:newV}); //也可以用 this.activeIndex
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
