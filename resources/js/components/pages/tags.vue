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
									<button class="_btn _action_btn edit_btn1" type="button" @click="showEditModel(tag,i)">Edit</button>
									<button class="_btn _action_btn make_btn1" type="button" @click="showDeletingModel(tag,i)">Delete</button>
								</td>
							</tr>
								<!-- ITEMS -->

							


						</table>
					</div>

	 <Modal
        v-model="admodel"
        title="Add tag"
        :mask-closeable="false">
        <Input v-model="data.tagsName" placeholder="Enter tag name..." style="width: 300px" />

		<div slot="footer"> 
           <button type="default" @click="admodel=false">Close</button>
           <button type="primary"  @click="addTag" :disabled="isAdding" :loading="isAdding">{{isAdding ? 'Adding...':'Add Tag'}}</button>

		</div>
    </Modal>

	 <Modal
        v-model="editModel"
        title="Edit tag"
        :mask-closeable="false"
		:closeable="false">
        <Input v-model="editData.tagsName" placeholder="Enter tag name..." style="width: 300px" />

		<div slot="footer"> 
            <button type="default" @click="editModel=false">Close</button>
            <button type="primary"  @click="editTag" :disabled="isAdding" :loading="isAdding">{{isAdding ? 'Edit...':'Edit Tag'}}</button>

		</div>
    </Modal>
	  <Modal v-model="showDeleteModel" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>Delete confirmation</span>
        </p>
        <div style="text-align:center">
            <p>Are you sure you want to delete tag ?</p>
           
        </div>
        <div slot="footer">
            <Button type="error" size="large" long :loading="showDeleteModel" :disabled="showDeleteModel" @click="deleteTag" >Delete</Button>
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
	editModel:false,
	admodel :false ,
	isAdding:false,
	showDeleteModel:false,


	tags:[],
	editData:{ 
		tagsName : ''
	
	},
	deleteItem:{},
	index:-1,
	i:-1
}
},
methods:{
async addTag(){
		if(this.data.tagsName.trim()== '')return this.error('Tag name is Required','Oops')
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
		async editTag(){
		if(this.editData.tagsName.trim()== '')return this.error('Tag name is Required','Oops')
       const res=await this.callApi('post','/app/edit-tag',this.editData);
  
	  if(res.status==200){
		  this.tags[this.index].tagsName=this.editData.tagsName
			this.success('Tag has been added successfully','Success')
			this.editModel =false 
		   
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
showEditModel(tag,index){
	let obj={
		id:tag.id,
		tagsName:tag.tagsName
	}
	this.editData=obj
	this.editModel=true
	this.index=index
},
async deleteTag(){
		if(!confirm('Are you sure to delete this tag '))return 
		this.$set(tag,'isdeleting',true)
       const res=await this.callApi('post','/app/delete-tag',this.deleteItem);
  
	  if(res.status==200){
		  this.tags.splice(i,1)
			this.success('Tag has been added successfully','Success')
		
		   
		}else{
   
	               	this.warning('something went to wrong','Erorr')

	    }

},
showDeletingModel(tag,i){
	this.deleteItem=tag
	this.i=i
	this.showDeleteModel=true
}
	
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