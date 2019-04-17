<!--  -->
<template>
  <div>
    <mt-cell title="国际区号" :value="mobilePrefix" @click.native="selectPrefix" is-link></mt-cell>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="ruleForm.phone"></mt-field>
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
      <mt-button class="register-msg-btn code-btn" v-show="show" v-on:click="getCode">获取</mt-button>
      <mt-button class="register-msg-btn code-btn" v-show="!show">{{count}} s</mt-button>
    </mt-field>
    <mt-field label="邀请码" placeholder="请输入邀请码(必填)" v-model="ruleForm.invite_id" class="myinput"></mt-field>
    <div class="btn-box">
      <mt-button type="primary" class="submit-btn" @click.native="register">注册</mt-button>
    </div>
    
    <mt-popup v-model="popupVisible" position="bottom">
      <mt-picker value-key="cn_name" @change="onDataChange" :slots="slots"></mt-picker>
      <div class="submit-box-common">
        <mt-button type="primary" size="large" @click="close">确定</mt-button>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import { requestPost, requestGet } from "@/api/api.js";
// import { hex_sha1 } from "@/utils/sha1.js";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      popupVisible: false,
      mobilePrefix: "86",
      ruleForm: {
        phone: "",
        codes: "",
        invite_id: "",
        pwd: "",
        checkpwd: "",
        type: "1"
      },
      phone: "",
      username: "",
      password: "",
      number: "",
      pwd: "password",
      show: true,
      timer: null,
      count: "",
      slots: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          textAlign: "center",
          defaultIndex: 1
        }
      ]
    };
  },

  components: {},

  computed: {},

  methods: {
    onDataChange(picker, values) {
      if (values[0]) {
        this.country = values[0].cn_name;
        this.mobilePrefix = values[0].mobile_prefix;
      }
    },
    selectPrefix() {
      this.popupVisible = true;

      this.getcountry();
    },
    getcountry() {
      requestGet("/api/v1/mobile_prefix").then(res => {
        if (res.data.status == "success") {
          let arr = [];
          res.data.data.forEach(el => {
            arr.push({
              cn_name: el.cn_name + "(" + el.mobile_prefix + ")",
              id: el.id,
              mobile_prefix: el.mobile_prefix
            });
          });
          this.slots[0].values = arr;
        }
      });
    },
    register() {
      requestPost("/api/v1/user", {
        mobile_prefix: this.mobilePrefix,
        type: "1",
        mobile: this.ruleForm.phone,
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
          this.$router.push({ path: "/mobileLogin" });
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
        this.sendCode();
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
        value: this.ruleForm.phone,
        type: "1",
        mobile_prefix: "86"
      }).then(res => {
        // console.log(res);

        if (res.data.status == "fail") {
          Toast({
            message: res.data.msg,
            position: "top",
            duration: 2000
          });
        } else if (res.data.status == "success") {
          Toast({
            message: "发送成功",
            position: "top",
            duration: 2000
          });
        }
      });
    },
    toEmail() {
      this.$router.push("/emailRegister");
    },
    close() {
      this.popupVisible = false;
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
  margin-top: 1rem;
}
.icon-16::before {
  color: gray;
}

.bottom-text {
  color: #26a2ff;
  padding: 0.3rem;
}
</style>