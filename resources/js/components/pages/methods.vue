<template>
    <div>
        <h1>Calculation opernator</h1>
        <button @click="Increment(1)">Increment</button>
        <p>Count:{{count}}</p>
        <button @click="Increment(-1)">Decrement</button>
<div v-for="(blog ,i) in blogs" :key="i" >
    <p>ID:{{blog.id}}</p>
<h1>Title:{{blog.title}}</h1>
<p>Post:{{blog.post}}</p>

</div>
<br>
<br>
<br>

<div>
<h1 v-if="showItem">Item showItem</h1>
<h1 v-else>Item else showItem</h1>
</div>
<button @click="changeItem()">Submit</button>
<button @click="showItem=!showItem">Row change </button>

    </div>
    
</template>
<script>
export default {
    data(){
        return {
            count:0,
            blogs:[],
            showItem:false
        }
    },
    methods:{
      Increment(number){        
      this.count+=number         
    },
    changeItem(){
        this.showItem=!this.showItem
    }
    },
    created(){
let item=[
    {id:1,title:'the news pepar mention bd',post:'md aaa  dfd fsksk'},
    {id:2,title:'the news pepar mention bd','post':'md aaa  dfd fsksk'},
    {id:3,title:'the news pepar mention bd','post':'md aaa  dfd fsksk'},
    {id:4,title:'the news pepar mention bd','post':'md aaa  dfd fsksk'},
    {id:5,title:'the news pepar mention bd','post':'md aaa  dfd fsksk'}

]

this.blogs=item;

    }
    
    
}
</script>