<template>
  <div class="">
       <mt-header title="重置密码">
  <router-link to="/login" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link> 
  </mt-header>
      <mt-field label="旧密码" placeholder="请输入旧密码" type="password" v-model="old_password"></mt-field>
      <mt-field label="新密码" placeholder="请输入新密码" type="password" v-model="new_password"></mt-field>
      
     <div class="submit-box-common">
     <mt-button type="primary" size="large" @click="reset">确认</mt-button>
     </div>
     
  </div>
</template>

<script>
import {requestPut} from '@/api/api.js'
 import { Toast } from 'mint-ui';
 
export default {
  name: '',
  data() { 
    return {
     old_password:'',
     new_password:'',
     code:''
    }
  },
  methods:{
     reset(){
           let uid=JSON.parse(localStorage.getItem('user_info')).uid
          
          requestPut('api/v1/user/'+ uid,{
              old_password:this.old_password,
              new_password:this.new_password,
              code:this.$route.query.code,
              
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
               this.$router.push({path:'/setting',})
            }
             
          })
          
    
     }
    

  }
 }
</script>

<style lang="" scoped>
</style>