<template>
    <div id="home">
        <div class="block">
            <span class="demonstration">默认 Hover 指示器触发</span>
            <!-- change事件，幻灯片切换时触发 回调参数：目前激活的幻灯片的索引，原幻灯片的索引 -->
            <el-carousel trigger="click" @change="changeHandler" height="200px">
                <el-carousel-item v-for="(item,index) in images" :key="index">
                    
                    <h3 class="small"><img :src="item.src" alt=""></h3>
                </el-carousel-item>
            </el-carousel>
        </div>

        <p>上面是轮播图</p>

        
    </div>
  
</template>

<script>

// import img1 from '../../assets/01.jpeg'
// import img2 from '../../assets/02.jpeg'
// import img3 from '../../assets/03.jpeg'

var images=[
    {id:1,src:'static/01.jpeg'},
    {id:2,src:'static/02.jpeg'},
    {id:3,src:'static/03.jpeg'},
    {id:4,src:'static/04.jpeg'}
]

export default {
    name:'Home',
    data(){
        return{
            images:images
        }
    },
    components:{
        
    },
    methods:{
       changeHandler(active,oldindex){
           console.log(active,oldindex);
       }
       
    }
    

}
</script>

<style lang="css" scoped>

    .block img{
        width: 60%;
        height:auto;
    }


    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

</style>