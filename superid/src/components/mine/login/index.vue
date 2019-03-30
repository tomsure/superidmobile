<!--  -->
<template>
  <div>
      <div class="loginImg">
         <img src="../../../assets/logo.png" alt="">
      </div>
      <mt-field label="账号" placeholder="手机号码/电子邮箱" v-model="username"></mt-field>

   <mt-field label="密码" placeholder="请输入登录密码" type="password" v-model="password"></mt-field>
     <div class="btn-box">
       <mt-button type="primary" class="submit-btn" @click.native="toLogin">立即登录</mt-button>
     </div>
       <div class="footer-box">
           <div @click="forgetPassword">忘记密码？</div><div @click="toRegister" >注册</div>
           
            
       </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username:'',
      password:''

    };
  },

  components: {},

  computed: {},

  methods: {
    toLogin(){
      this.$router.push({path:'/mine'})
    },
    forgetPassword(){
      alert('change')
      this.$router.push({path:'/forgetPassword'})
    },
    toRegister(){
       alert('register')
       this.$router.push({path:'/register'})
    }

  }
}

</script>
<style lang="less"  scoped>
 .submit-btn{
   width: 95%;
   margin: 0 auto;
 }
 .btn-box{
   text-align:center;
 }
 .loginImg{
    width:2.665245202558635rem;
    height:2.665245202558635rem;
    border-radius: 100px;
        // border: 1px solid red;
    overflow: hidden;
    margin: 1rem auto;
   
   img{
     width: 100%;
     height:100%;
     
   }
    
    
 }
  .footer-box{
       margin-top: 2rem;
       display: flex;
       justify-content: space-between;
       div{
         flex: 1;
       }
   }
</style>