<template>
    <div>
        <div class="content">
<div class="container-fluid">
			

        <div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
					<p class="_title0">Category <button  @click="admodel=true"><Icon type="md-add"/>Add Tag</button></p>

					<div class="_overflow _table_div">
						<table class="_table">
								<!-- TABLE TITLE -->
							<tr>
								<th>Id</th>
								<th>Category Name</th>
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
        title="Add Category"
        :mask-closeable="false">
        <Input v-model="data.Name" placeholder="Enter Category name..." style="width: 300px" />
        <div class="space"></div>
        <br>
         <Upload
       
        type="drag"
        :headers="{'x-csrf-token':token,'X-Requested-With':'XMLHttpRequest'}"
	
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-error="handleError"
		 :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        action="/app/upload">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>
<div class="image_thumb" v-if="data.image">
	<img :src="`/uploads/${data.image}`"/>

</div>

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
            <Button type="error" size="large" long :loading="isDeleting" :disabled="isDeleting" @click="deleteTag" >Delete</Button>
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
		categoryName:'',
		image:''
	},
	editModel:false,
	admodel :false ,
	isAdding:false,
	showDeleteModel:false,
  isDeleting:false,

	tags:[],
	editData:{ 
		tagsName : ''
	
	},
	deleteItem:{},
	index:-1,
	deletingInex:-1,
    token:'',
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
	  this.isDeleting=true
		
       const res=await this.callApi('post','/app/delete-tag',this.deleteItem);
  
	  if(res.status==200){
		  this.tags.splice(this.deletingInex,1)
			this.success('Tag has been added successfully','Success')
		
		   
		}else{
   
	               	this.warning('something went to wrong','Erorr')
	    }

	this.isDeleting=false
	this.showDeleteModel=false


},
showDeletingModel(tag,i){
	this.deleteItem=tag
	this.deletingInex=i
	this.showDeleteModel=true

},
       handleSuccess (res, file) {
                this.data.image=res
            },
			  handleError (res, file) {
          
				// console.log('this',file)
				 this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: `${file.errors.file.length ? file.errprs.file[0]:'SOmething went to wrong !'}`
                });
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
	
},
async created(){

    this.token=window.Laravel.csrfToken

    // console.log(this.token=window.Laravel.csrfToken);
	const res=await this.callApi('get','/app/tags_get');
	  

	if(res.status==200){
       this.tags=res.data
	}else{
		this.warning('something went to wrong','Erorr')

	}
}

}
</script>