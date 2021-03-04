<template>
    <div>
        <h1>Calculation opernator</h1>
        <button @click="Increment(1)">Increment</button>
        <p>Count:{{count}}</p>
        <button @click="Increment(-1)">Decrement</button>

    </div>
</template>
<script>
export default {
    data(){
        return {
            count:0
        }
    },
    methods:{
      Increment(number){  
            this.count +=number
    }
    }
    
}
</script>