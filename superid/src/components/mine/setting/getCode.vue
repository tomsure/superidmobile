<!--  -->
<template>
  <div>
    <mt-header title="忘记密码">
      <router-link to="/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
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

      code:''
    };
  },

  components: {},

  computed: {},

  methods: {
    
    toReset() {
      
       this.$router.push({path:'/resetPassword',query:{code:this.code}})
       
    
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