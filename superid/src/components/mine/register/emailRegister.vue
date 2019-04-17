<!--  -->
<template>
  <div>
    
    <mt-field label="邮箱" placeholder="请输入邮箱"  v-model="ruleForm.email"></mt-field>
    <mt-field
      label="密码"
      placeholder="请输入密码"
      :type="pwd"
      :disableClear="true"
      v-model="ruleForm.pwd"
    >
      <span class="icon-16" @click="show1"></span>
    </mt-field>
    <mt-field label="验证码" placeholder="请输入验证码" type="number" v-model="ruleForm.codes">
      <!-- <mt-button size="small" class="code-btn" @click="sendCode">获取</mt-button>
      -->
      <mt-button class="register-msg-btn code-btn" v-show="show" v-on:click="getCode">获取</mt-button>
      <mt-button class="register-msg-btn code-btn"  v-show="!show">{{count}} s</mt-button>
    </mt-field>
    <mt-field label="邀请码" placeholder="请输入邀请码(必填)" v-model="ruleForm.invite_id" class="myinput"></mt-field>
    <div class="btn-box">
      <mt-button type="primary" class="submit-btn" @click.native="register">注册</mt-button>
    </div>
  </div>
</template>

<script>
import { requestPost } from "@/api/api.js";
// import { hex_sha1 } from "@/utils/sha1.js";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      
      ruleForm: {
        email: "",
        codes: "",
        invite_id: "",
        pwd: "",
        checkpwd: "",
        type: "1"
      },
      email: "",
      username: "",
      password: "",
      number: "",
      pwd: "password",
      show:true,    
      timer:null,
      count:''
    };
  },
  methods: {
    register() {
      requestPost("/api/v1/user", {
        type: "2",
        email: this.ruleForm.email,
        password: this.ruleForm.pwd,
        invite_id: this.ruleForm.invite_id,
        code: this.ruleForm.codes
      }).then(res => {
        if (res.data.status == "success") {
           Toast({
            message: res.data.msg,
            position: "top",
            duration: 2000
          });
          this.$router.push({ path: "/EmailLogin" });
        } else {
          Toast({
            message: res.data.msg,
            position: "top",
            duration: 2000
          });
        }
      });
    },
    show1() {
      if (this.pwd == "password") {
        this.pwd = "text";
      } else {
        this.pwd = "password";
      }
    },
    getCode() {
      this.show = false;
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.sendCode()
        this.show = false;

        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },

    sendCode() {
      requestPost("/api/v1/user/send_code", {
        value: this.ruleForm.email,
        type: "2",
        
      }).then(res => {
          if ((res.data.status == "fail")) {
          Toast({
            message: res.data.msg,
            position: "top",
            duration: 2000
          });
        } else if ((res.data.status == "success")) {
          Toast({
            message: "发送成功",
            position: "top",
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
  margin-top: 1rem
}
.icon-16::before {
  color: gray;
}
.code-btn {
  background: #ff9800;
  color: white;
}
</style>