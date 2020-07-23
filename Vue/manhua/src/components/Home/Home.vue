<template>
    <div id="Home">
        
        <div>
            <ul>

                <li v-for="(item,index) in images" :key="index">
                    <h3>{{index}}</h3>
                    <img :src="item.src" alt="">
                </li>
            </ul>
            
        </div>
        
    </div>
  
</template>

<script>

    


export default {
    name:'Home',
    data(){
        return{
            images:[
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45663.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45664.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45665.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45666.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45667.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45668.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45669.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45670.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45671.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45672.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45673.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45674.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45675.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45676.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45677.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45678.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45679.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45680.jpg'},
                {src:'https://mhimg.eshanyao.com/ManHuaKu/p/paiqiushaonian/397/45681.jpg'}
            ],
            msg:'hh',
            list:['hh','kk']
        }
    },
    components:{
        
    },
    methods:{
       
    },
    created(){
    }
    

}
</script>

<style>
    ul{
        text-align:center;
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
    }
    ul li{
        list-style-type: none;
        width:30%;
    }
    ul li img{
        width:100%;
        height:auto;
    }
</style>