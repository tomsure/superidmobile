<!--  -->
<template>
  <div>
      <h3>忘记密码</h3>
      <mt-field label="phone" placeholder="Input tel" type="tel" v-model="phone"></mt-field>
      <mt-button type="primary" @click="getCode()">获取验证码</mt-button>
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
    getCode(){
      requestPost('/api/v1/user/send_code_by_username',{
        "phone":this.phone
      }).then(res=>{
          
      })
    }

  }
}

</script>
<style  scoped>
</style>