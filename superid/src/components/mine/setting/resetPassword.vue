<template>
  <div class="">
       <mt-header title="重置密码">
  <router-link to="/login" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link> 
  </mt-header>
      <mt-field label="密码" placeholder="6-20位字母、数字或符号组合" type="tel" v-model="password"></mt-field>
      <mt-button type="primary" size="large" @click="reset">确认</mt-button>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
     password:''
    }
  },
  methods:{
     reset(){
         
           this.$router.push({path:'/login'})
    
     }
    

  }
 }
</script>

<style lang="" scoped>
</style>