<!--  -->
<template>
  <div>
      <mt-header title="忘记密码">
  <router-link to="/login" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
  
</mt-header>
      <mt-field label="手机号码" placeholder="请输入手机号码" type="tel" v-model="phone"></mt-field>
      <mt-button type="primary" size="large" @click="toInputCode">获取验证码</mt-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone:''
    };
  },

  components: {},

  computed: {},

  methods: {
    toInputCode(){
       
      this.$router.push({path:'/verificationCode'})
    }
  }
}

</script>
<style  scoped>
</style>