<template>
    <div id="home">
        <!-- 轮播图 -->
        <Navbar title="我是主页导航栏"/>
        <div>{{msg}}</div>
        <Lunbotu :childData='childData' @dataFromChild="dataFromChild"/>
        <div>{{fromChild}}</div>
        
    </div>
  
</template>

<script>
import Lunbotu from './Lunbotu'
export default {
    name:'Home',
    data(){
        return{
            msg:'我是主页',
            childData:'父传子-props',
            fromChild:''
        }
    },
    components:{
        Lunbotu
    },
    methods:{
        dataFromChild(value){
            console.log(value);
            this.fromChild=value;
        }
    }
    

}
</script>

<style lang="css" scoped>
    #home{
        border:1px green solid;
        
    }

</style>