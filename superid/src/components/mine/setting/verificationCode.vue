<template>
  <div class="">
      <mt-header title="输入验证码">
  <router-link to="/safe" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link> 
  </mt-header>
       <mt-field label="验证码" placeholder="请输入验证码" type="number" v-model="code"></mt-field>
     
       <div class="submit-box-common">
        <mt-button type="primary" size="large" @click="toReset" >下一步</mt-button>
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
      value:'',
      code:''
    }
  },
  created () {
    this.sendCode()
  },
  methods:{
      sendCode(){
       
        let data={
          value:JSON.parse(localStorage.getItem('user_info')).mobile,
          type:" 1",
          mobile_prefix:JSON.parse(localStorage.getItem('user_info')).mobile_prefix
          }
          requestPost('/api/v1/user/send_code',data).then(res=>{
                if(res.data.status=='fail'){
                   Toast({
                  message: res.data.msg,
                  position: 'top',
                  duration: 2000
                });
                 }else if(res.data.status=='success'){
                  
                //  alert('success')
               }
          })
      
      
      },
      toReset(){
       this.$router.push({path:'/resetPassword',query:{code:this.code}})
      }
  }
 }
</script>

<style lang="" scoped>
</style>