<template>
    <div>
        <div class="content">
<div class="container-fluid">
			

        <div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
					<p class="_title0">Tags <button  @click="admodel=true"><Icon type="md-add"/>Add Tag</button></p>

					<div class="_overflow _table_div">
						<table class="_table">
								<!-- TABLE TITLE -->
							<tr>
								<th>Id</th>
								<th>Tag Name</th>
								<th>Created At</th>
								<th>Action</th>
							</tr>
								<!-- TABLE TITLE -->


								<!-- ITEMS -->
							<tr v-for="(tag ,i) in tags" :key="i" v-if="tags.length">
								<td>{{tag.id}}</td>
								<td class="_table_name">{{tag.tagsName}}</td>
								<td>{{tag.created_at}}</td>
								<td>
									<button class="_btn _action_btn view_btn1" type="button">View</button>
									<button class="_btn _action_btn edit_btn1" type="button">Edit</button>
									<button class="_btn _action_btn make_btn1" type="button">Delete</button>
								</td>
							</tr>
								<!-- ITEMS -->

							


						</table>
					</div>

	 <Modal
        v-model="admodel"
        title="Common Modal dialog box title"
        :mask-closeable="false">
        <Input v-model="data.tagsName" placeholder="Enter tag name..." style="width: 300px" />

		<div slot="footer"> 
<button type="default" @click="admodel=false">Close</button>
<button type="primary"  @click="addTag" :disabled="isAdding" :loading="isAdding">{{isAdding ? 'Adding...':'Add Tag'}}</button>

		</div>
    </Modal>

	  </div>

    </div>
	</div>
    </div>
</template>
<script>
export default {

data(){
return {
	data:{
		tagsName:' '
	},
	admodel :false ,
	isAdding:false,
	tags:[],
}
},
methods:{
async addTag(){
		// if(this.data.tagsName.trim()== '')return this.error('Tag name is Required','Oops')
       const res=await this.callApi('post','/app/create-tag',this.data);
  
	  if(res.status==200){
		    this.tags.unshift(res.data)
			this.success('Tag has been added successfully','Success')
			this.admodel =false 
		    this.data.tagsName=''
		}else{
   
			 if(res.status==422){

        //    console.log(res.data.errors.tagsName[0]);

                 if(res.data.errors.tagsName){
                 	this.warning(res.data.errors.tagsName[0],'Filled')
                      }
			 }else{
	               	this.warning('something went to wrong','Erorr')
					   

			 }
			


	    }

},
		
	
},
async created(){
	const res=await this.callApi('get','/app/tags_get');
	  

	if(res.status==200){
       this.tags=res.data
	}else{
		this.warning('something went to wrong','Erorr')

	}
}









 
}
</script>