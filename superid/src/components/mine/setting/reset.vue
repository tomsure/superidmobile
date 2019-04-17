<template>
  <div class="">
       <mt-header title="重置密码">
  <router-link  to="/getCode" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link> 
  </mt-header>
      <!-- <mt-field label="旧密码" placeholder="请输入旧密码" type="password" v-model="old_password"></mt-field> -->
      <mt-field label="用户名" placeholder="请输入用户名"  v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入新密码" type="password" v-model="password"></mt-field>
      <!-- <mt-field label="再次输入密码" placeholder="请再次输入密码" type="password" v-model=""></mt-field> -->
      <!-- <mt-field label="验证码" placeholder="请输入验证码"  v-model="code"></mt-field> -->
      
     <div class="submit-box-common">
     <mt-button type="primary" size="large" @click="reset">确认</mt-button>
     </div>
     
  </div>
</template>

<script>
import {requestPost} from '@/api/api.js'
 import { Toast } from 'mint-ui';
 
export default {
  name: '',
  data() { 
    return {
     username:'',
     password:'',
     code:'',
     
    }
  },
  methods:{
     reset(){
        //    let uid=JSON.parse(localStorage.getItem('user_info')).uid
          
          requestPost('/api/v1/user/change_password',{
              username:this.username,
              password:this.password,
              code:this.$route.query.code,
              token:this.$route.query.token
          }).then(res=>{
            
            if(res.data.status=="fail"){
               Toast({
            message: res.data.msg,
            position: 'top',
            duration: 2000
            });
            }else  if(res.data.status='success'){
              Toast({
            message: '修改成功',
            position: 'top',
            duration: 2000
             });
               this.$router.push({path:'/mobileLogin',})
            }
             
          })
          
    
     }
    

  }
 }
</script>

<style lang="" scoped>
</style>