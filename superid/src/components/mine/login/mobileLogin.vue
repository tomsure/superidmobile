<!--  -->
<template>
  <div class="login-box" :style="backgroundDiv">
    <div class="loginImg">
      <img src="../../../assets/logo1.png" alt>
    </div>
      <div class="t-center tc-w header-text">
         一站式区块链生态平台
       </div>
      <div class="login-box-common">
       <mt-cell title="国际区号" class="radius-top" :value='mobilePrefix' @click.native='selectPrefix' is-link></mt-cell>
      <mt-field  placeholder="请输入手机号码"   v-model="username"></mt-field>
      <mt-field  class="radius-bottom" placeholder="请输入登录密码" type="password" v-model="password"></mt-field>
      </div>
    
    <div class="btn-box">
      <mt-button type="primary" class=" login-btn" @click.native="toLogin">立即登录</mt-button>
    </div>
    <div class="footer-box login-bottom-text">
      <div @click="forgetPassword">忘记密码？</div>
      <div @click="toRegister">注册</div>
    </div>
      <div class="t-center bottom-text" >
          <span  @click="toEmailLogin">邮箱登录</span>
     </div>
     <mt-popup v-model="popupVisible" position="bottom">
      <mt-picker value-key="cn_name" @change='onDataChange' :slots="slots" ></mt-picker>
      <div class="submit-box-common ">
        <mt-button type="primary" size="large" @click="close">确定</mt-button>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import { requestPost,requestGet } from "@/api/api.js";
import { setToken,getToken,removeToken } from "@/utils/auth.js";
import { Toast } from "mint-ui";
// import { hex_sha1 } from "@/utils/sha1.js";


export default {
  data() {
    return {
    backgroundDiv: {
            backgroundImage: 'url(' + require('@/assets/bg.png') + ')'
             
                 },
      popupVisible:false,
      country:'',
      mobilePrefix:'86',
      username: "",
      password: "",
      slots: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          textAlign: "center",
          defaultIndex: 1
        },
        
      ],
       paramData:null
    };
  },

  components: {},

  computed: {},

  methods: {
      toEmailLogin(){
     this.$router.push({path:'/EmailLogin'})
    },
   selectPrefix(){
     this.popupVisible=true
     
      this.getcountry()
    },
    getcountry() {
      requestGet("/api/v1/mobile_prefix").then(res => {
        if (res.data.status == "success") {
          let arr = [];
        res.data.data.forEach(el => {
            arr.push({ cn_name: el.cn_name + '('+ el.mobile_prefix +')', id: el.id,mobile_prefix:el.mobile_prefix });
          });
          this.slots[0].values = arr;
                  }
      });
    },
    onDataChange(picker, values){
     if (values[0]) {
        this.country = values[0].cn_name;
        this.mobilePrefix=values[0].mobile_prefix
                    }
                                },
    close(){
   this.popupVisible=false
    },
   
    toLogin() {
       let url=null
       let data=null
         var str = this.username;
        var reg = RegExp(/@/);
        if(reg.test(str)){
          
           url='/api/v1/user/email_login'
           data={
              email:this.username,
              password:this.password
           }
        }else{
             data={
           mobile_prefix:this.mobilePrefix,
           mobile:this.username,
           password:this.password,
          //  mobile_prefix:''

               }
            url='/api/v1/user/mobile_login'
        }
         requestPost( url ,data).then(res => {
              
        if(res.data.status=="fail") {
          
          Toast({
            message: res.data.msg,
            position: "top",
            duration: 2000
          });
        }else if (res.data.status === "success") {
          Toast({
            message: "登录成功",
            position: "top",
            duration: 2000
          });
          localStorage.setItem("user_info", JSON.stringify(res.data.data));

          setToken(res.data.data.token);
           
          this.$router.push({ path: "/", query: { status: "login" } });
        }
      })
    },
    forgetPassword() {
      // alert('change')
      this.$router.push({ name: "forgetPassword",params:{from:'email'} });
    },
    toRegister() {
      this.$router.push({ path: "/register" });
    },

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
.loginImg {
  width: 1.5rem;
  height:2.1rem;
  border-radius: 100px;
  // border: 1px solid red;
  overflow: hidden;
  margin: 0rem auto;
  margin-bottom: 0.2rem;

  img {
    width: 100%;
    height: 100%;
  }
}
.footer-box {
  // position: fixed;
  width: 100%;
  bottom: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  div {
    flex: 1;
    color: white;
  }
}
 .login-bottom-text{
     margin-bottom: 1rem;
   }
 
</style>