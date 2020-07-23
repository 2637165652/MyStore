<template>
    <div id="Home">
        <h3>我是首页</h3>
        count: {{$store.state.count}}
        <button @click="subtractHandler">-2</button><input type="text" v-model="count"><button @click="addHandler">+1</button>
       <button @click="add2Handler">+2</button>
        
    </div>
  
</template>

<script>

    


export default {
    name:'Home',
    data(){
        return{
            
        }
    },
    components:{
        
    },
    methods:{
        addHandler(){
            this.$store.commit('increment');
        },
        subtractHandler(){
            this.$store.commit('subtractment',2);
        },
        //在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读
        // add2Handler(){
        //     this.$store.commit('incre2ment',{
        //         n:2
        //     })
        // },
        
        //对象风格的提交方式:提交 mutation 的另一种方式是直接使用包含 type 属性的对象
        add2Handler(){
            this.$store.commit({
                type:'incre2ment',
                n:2
            })
        },
        
      
    },
    computed:{
        count(){
            return this.$store.state.count;
        }
    }
    

}
</script>

<style>
    
</style>