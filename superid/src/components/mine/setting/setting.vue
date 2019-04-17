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

       <!-- <mt-cell title="" is-link> -->
      
         
  
     <div class='top-box'>
        <div class="left-box">
           <div class="img-box"><img slot="icon" src="../../../assets/logo.png"  class="logo" ></div>
         <div class="info-text">
          <div class="ft-18">
            {{username}}
          </div>
          <div class="ft-12">UID:{{uid}}</div>
        </div>
        </div>
       <div style="margin-right:0.2rem;">
          <div class="edit-item ft-16"><span>修改头像</span><span class="icon--2"></span></div>

       </div>
     </div>
  

<!-- </mt-cell> -->


    </div>
    <div>
      <mt-cell title="昵称" is-link>
        <span></span>
      </mt-cell>
      <mt-cell title="安全设置" to="/safe" is-link>

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
      this.$router.push({ path: "/mobileLogin" });
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
  /* position: relative; */
  right: 1.7rem;
}
.logo{
  /* margin-right: 0.5rem; */
  /* margin-left: 0.5rem; */
}
.img-box{
  display:inline-block;
  width:1rem;
  height:1rem;
  margin-right:0.2rem;
  img{
    width:100%;
    height:100%;
  }
}
 .top-box{
   display:flex;
   background:white;
   padding:0.2rem;
   justify-content:space-between;
 }
 .edit-item{
   float:right;
   align-item:flex-end;
   margin-top:0.15rem;
   /* font-size:' */
 }
 .left-box{
   display:flex;
 }
 .icon--2:before{
   font-size:0.3rem;
   color:#c8c8cd;
   font-weight:900;
   margin-left:0.1rem;
 }
</style>
