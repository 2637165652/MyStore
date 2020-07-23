<template>
    <div><h3>我是家教记录</h3></div>
</template>

<script>
export default {
    name:'Record',
    created(){
        console.log(this.$route.query.id);
    }
}
</script>

<style>

</style>