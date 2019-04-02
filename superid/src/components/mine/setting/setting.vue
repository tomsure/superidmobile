<!--  -->
<template>
  <div>
    <div class="header">
      <mt-header title="个人设置">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div>
     
       <mt-cell title="" is-link>
         <div class="info-text">
          <div class="ft-18">
            {{username}}
          </div>
          <div class="ft-12">UID:{{uid}}</div>
        </div>
  <span>修改头像</span>
  <img slot="icon" src="../../../assets/logo.png" width="24" class="logo" height="24">
</mt-cell>
    </div>
    <div>
      <mt-cell title="昵称" is-link>
        <span></span>
      </mt-cell>
      <mt-cell title="安全设置" is-link>
        
      </mt-cell>
      <mt-cell title="收款设置" is-link>
        
      </mt-cell>
      <mt-cell title="通用设置" is-link>
        
      </mt-cell>
    </div>
    <div class="btn-box">
      <button class="login-out-btn" @click="logOut">退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:'',
      uid:'',


    };
  },

  components: {},

  computed: {},
created () {
   if(localStorage.getItem('user_info')){
    this.username=JSON.parse(localStorage.getItem('user_info')).username
    this.uid=JSON.parse(localStorage.getItem('user_info')).uid
    
   }
},
  methods: {
    logOut() {
      this.$router.push({ path: "/login" });
      localStorage.removeItem("user_info");
      localStorage.removeItem("token");
    }
  }
};
</script>
<style  scoped>
.header {
  margin: 0.5rem 0;
}
.btn-box {
  padding: 0.5rem 0;
  background: white;
  /* width: 95%; */
  margin: 0.5rem auto;
}
.login-out-btn {
  border: 0;
  background: white;
  color: #e51c23;
}
.info-text{
  position: relative;
  right: 3.3rem;
}
.logo{
  /* margin-right: 0.5rem; */
  /* margin-left: 0.5rem; */
}
</style>