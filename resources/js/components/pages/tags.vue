<template>
    <div>
        <div class="content">
<div class="container-fluid">
			

        <div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
					<p class="_title0">Tags <button><Icon type="md-add"/>Add Tag</button></p>

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
							<tr>
								<td>1</td>
								<td class="_table_name">Laaa</td>
								<td>12/12/12</td>
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
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>

		<div slot="footer">
<button type="default">Close</button>
<button type="primary">Add Tag</button>

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
		tagName:' '
	},
	admodel :true
}
},

	async created(){
		const res=await this.callApi('post','/app/create-tag',{tagName:'testtag'});
	console.log(res);
	if(res.status==200){
			console.log(res);
		}
	}
}
</script>