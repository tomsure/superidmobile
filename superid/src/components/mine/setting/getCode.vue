<!--  -->
<template>
  <div>
    <mt-header title="忘记密码">
      <router-link to="/forgetPassword" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
     <div>
       <!-- 请输入验证码 -->
     </div>
    <mt-field label="验证码" placeholder="请输入验证码" type="tel" v-model="code"></mt-field>
    <div class="btn-box">
      <mt-button type="primary" size="large" @click="toReset">下一步</mt-button>
    </div>
  </div>
</template>

<script>
import { requestPost } from "@/api/api";
import { Toast } from "mint-ui";

export default {
  data() {
    return {

      code:'',
      token:''
    };
  },

  components: {},

  computed: {},

  methods: {
    
    toReset() {
      
      //  this.$router.push({path:'/resetPassword',query:{code:this.code}})

        requestPost("/api/v1/user/check_code_by_username",{
         username:this.$route.query.phone,
         code:this.code
        }).then(res=>{
           if(res.data.status=='fail'){
             Toast({
            message: res.data.msg,
            position: 'top',
            duration: 2000
             })
           } else if(res.data.status=='success'){
              this.token=res.data.data.token
               this.$router.push({path:'/reset',query:{code:this.code,token:this.token}})
            }
        })
      

       
    
    }
  }
};
</script>
<style  scoped>
  .btn-box {
     width: 90%;
     margin: 1rem auto;
     
  }
</style>