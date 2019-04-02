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

 import {requestPost } from '@/api/api.js'
 import {setToken} from '@/utils/auth.js'
import { Toast } from 'mint-ui';

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
         requestPost('/api/v1/user/mobile_login',
     {
                mobile: this.username ,
                password:this.password,
                mobile_prefix: "86",
      }
         
         ).then(res =>{
          if(res.data.status=='fial'){
                 Toast({
            message: res.msg,
            position: 'top',
            duration: 2000
          });
          }else if(res.data.status==='success'){
          
         
              Toast({
            message: '登录成功',
            position: 'top',
            duration: 2000
          });
           localStorage.setItem("user_info",JSON.stringify(res.data.data))
          //  console.log(typeof JSON.stringify(res.data.data))
           console.log(typeof JSON.parse(localStorage.getItem('user_info')))
           setToken(res.data.data.token)
            
            this.$router.push({path:'/',query:{status:'login'}})
              // console.log(res.data.data)
            
            
          }
         })
     
    },
    forgetPassword(){
      // alert('change')
      this.$router.push({path:'/forgetPassword'})
    },
    toRegister(){
       
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
   margin-top: 1rem;
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

      position: fixed;
      width: 100%;
      bottom: 0;
       margin-top: 2rem;
       margin-bottom: 0.5rem;
       display: flex;
       justify-content: space-between;
       div{
         flex: 1;
       }
   }
</style>