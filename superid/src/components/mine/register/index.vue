<!--  -->
<template>
  <div>
    <mt-header title="注册">
      <router-link to="/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  
       <mt-navbar v-model="selected">
  <mt-tab-item id="mobile">手机注册</mt-tab-item>
  <mt-tab-item id="email">邮箱注册</mt-tab-item>
  
</mt-navbar>


<mt-tab-container v-model="selected">
  <mt-tab-container-item id="mobile">
      <mobile></mobile>
  </mt-tab-container-item>
  <mt-tab-container-item id="email">
    <email></email>
  </mt-tab-container-item>
  
</mt-tab-container>
    
  </div>
</template>
<script>
import mobile from '@/components/mine/register/mobile.vue'
import email from '@/components/mine/register/emailRegister.vue'

export default {
  components: {
     mobile,email
  },
  data(){
    return {
      selected:'mobile',
     
         }

  },
  created () {
     
  }

}
</script>
