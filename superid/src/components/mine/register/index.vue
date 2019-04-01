<!--  -->
<template>
  <div>
     <mt-header title="注册">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
 
</mt-header>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="ruleForm.phone"></mt-field>
    <mt-field
      label="密码"
      placeholder="请输入密码"
      :type="pwd"
      :disableClear="true"
      v-model="ruleForm.pwd"
    >
      <span class="icon-16" @click="show"></span>
    </mt-field>
    <mt-field label="验证码" placeholder="请输入验证码" type="number" v-model="ruleForm.codes">
      <mt-button size="small" class="code-btn" @click="sendCode">获取</mt-button>
    </mt-field>
    <mt-field label="邀请码" placeholder="请输入邀请码(选填)" v-model="ruleForm.invite_id" class="myinput"></mt-field>
    <div class="btn-box">
      <mt-button type="primary" class="submit-btn" @click.native="register" >注册</mt-button>
    </div>
  </div>
</template>

<script>
import { requestPost } from "@/api/api.js";
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      mobilePrefix: "",
      ruleForm: {
        phone: "",
        codes: "",
        invite_id: "",
        pwd: "",
        checkpwd: "",
        type:'1'
      },
      phone: "",
      username: "",
      password: "",
      number: "",
      pwd: "password"
    };
  },

  components: {},

  computed: {},

  methods: {
    register() {
       requestPost('/api/v1/user',{
                mobile_prefix: this.mobilePrefix,
                type:'1',
                mobile: this.ruleForm.phone,
                password: this.ruleForm.pwd,
                invite_id: this.ruleForm.invite_id,
                code: this.ruleForm.codes,
       }).then(res=>{
         if(res.status=='success'){
         this.$router.push({path:'/login'})
         }else{
           Toast({
            message: res.data.msg,
            position: 'top',
            duration: 2000
          });
         }
       })
      
    },
    show() {
      if (this.pwd == "password") {
        this.pwd = "text";
      } else {
        this.pwd = "password";
      }
    },
    sendCode() {
      requestPost("/api/v1/user/send_code", {
          value:"13211221111",
          type: "121121",
          mobile_prefix: "86",
      }).then(res => {
          console.log( res)
       
        if(res.data.status="fail"){
           Toast({
            message: res.data.msg,
            position: 'top',
            duration: 2000
          });
        }else if(res.data.status="success") {
           Toast({
            message: '发送成功',
            position: 'top',
            duration: 2000
          });
        }
      });
    }
  }
};
</script>
<style lang="less"  scoped>
.submit-btn {
  width: 95%;
  margin: 0 auto;
}
.btn-box {
  text-align: center;
}
.icon-16::before {
  color: gray;
}
.code-btn {
  background: #ff9800;
  color: white;
}
</style>