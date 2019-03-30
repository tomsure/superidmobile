<template>
  <div class="">
      <mt-header title="输入验证码">
  <router-link to="/login" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link> 
  </mt-header>
       <mt-field label="验证码" placeholder="请输入验证码" type="tel" v-model="phone"></mt-field>
      <mt-button type="primary" size="large" @click="toReset">下一步</mt-button>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
      phone:''
    }
  },
  methods:{
      toReset(){
      this.$router.push({path:'/resetPassword'})

      }
  }
 }
</script>

<style lang="" scoped>
</style>