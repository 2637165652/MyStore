<template>
    <div id="message">
        <h4>我是消息中心</h4>
        <button @click="handler1">我的主页 动态路由参数</button>
        <button @click="handler2">家教记录 查询参数</button>
    </div>


</template>

<script>
export default {
    name:'Message',
    data(){
        return{

        }
    },
    methods:{
        handler1(){
            this.$router.push({name:'myPage',params:{id:1}});
        },
        handler2(){
            this.$router.push({name:'record',query:{id:2}})
        }
    }
    

}
</script>

<style>

</style>