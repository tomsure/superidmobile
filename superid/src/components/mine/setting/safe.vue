<!-- 
  安全
 -->
<template>
  <div>
    <!-- <mt-cell title="手机号码"  is-link value=""></mt-cell> -->
    <!-- <mt-cell title="电子邮箱"  is-link :value="email"></mt-cell> -->
    <mt-cell title="登录密码"  @click.native="sendCode" is-link :value="status"></mt-cell>
    <!-- <mt-cell title="身份认证" to="" is-link value=""></mt-cell>
    <mt-cell title="谷歌验证器" to="" is-link value=""></mt-cell>
    <mt-cell title="指纹识别" to="" is-link value=""></mt-cell>
    <mt-cell title="面部识别" to="" is-link value=""></mt-cell>
     -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      email:'',
      status:''
    };
  },
   
  components: {},

  computed: {},

  methods: {
    sendCode(){
      
       this.$router.push('/verificationCode')
    }
  }
};
</script>
<style  scoped>
</style>