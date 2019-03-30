<!--  -->
<template>
  <div>
    
<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password">
   <span><img src="" alt="">切换显示隐藏</span>
</mt-field>


<mt-field label="验证码" placeholder="请输入验证码" type="number" v-model="number">
   <mt-button size="small">获取短信验证码</mt-button>
</mt-field>
<mt-field label="邀请码" placeholder="请输入邀请码(选填)" v-model="number" class="myinput">
         
      </mt-field>
    <div class="btn-box">
           
            <mt-button type="primary" class="submit-btn" @click.native="register">注册</mt-button>
            
       </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
       phone:'',
      username:'',
      password:'',
     number:''
    };
  },

  components: {},

  computed: {},

  methods: {
    register(){
      alert('send register data')
       this.$router.push({path:'/login'})
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
 }
</style>