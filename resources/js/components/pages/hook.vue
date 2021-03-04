<template>
<div>
      <h1 ref="myref">Hook tutorial</h1>
    <h2>Tropic Name:{{name}}</h2>
</div>
  
</template>
<script>
export default {
    data(){
        return {
            name:'Hook for Locat stroage',
        }
    },
    beforeCreate(){
        console.log('before',this.name)
    },
    created(){
        //call mostly initial data for it..
      console.log('data an other function is avaiable but not html',this.name)  
    },mounted(){
        console.log('mount ',this.$refs.myref)
    }
}
</script>