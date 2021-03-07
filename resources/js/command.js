export default{
    data(){
        return {

        }
    },methods:{
   async callApi(method,url,dataObj){
            try{
           return   await  axios({ 
           method:method,
           url:url,
           data:dataObj
        })
            }catch (e){
            return e.response
            }
        },
        info (desc,title) {
            this.$Notice.info({
                title: title,
                desc: desc
            });
        },
        success (desc,title) {
            this.$Notice.success({
                title: title,
                desc: desc
            });
        },
        warning (desc,title) {
            this.$Notice.warning({
                title: title,
                desc: desc
            });
        },
        error (desc,title) {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        }
       
    }
}