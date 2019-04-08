<!--  -->
<template>
  <div>
    <mt-header title="忘记密码">
      <router-link to="/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <div class="btn-box">
      <mt-button type="primary" size="large" @click="toInputCode">获取验证码</mt-button>
    </div>
  </div>
</template>

<script>
import { requestPost } from "@/api/api";
import { Toast } from "mint-ui";

export default {
  data() {
    return {

      phone: ""
    };
  },

  components: {},

  computed: {},

  methods: {
    
    toInputCode() {
      requestPost("/api/v1/user/send_code_by_username", {
         
        value: this.phone
        }).then(res => {
        //  console.log(res.data.status)
        if (res.data.status === "fail") {
          Toast({
            message: res.data.msg,
            position: "top",
            duration: 2000
          });
        }else if(res.data.status === "success"){
         this.$router.push({path:'/getCode',query:{code:""}})
       }
      });

      // this.$router.push({path:'/verificationCode'})
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