<!--  -->
<template>
  <div>
     
     
        <div class="info-box">
          <h4>账号信息</h4>
           <mt-cell title="账号" :value="username"></mt-cell>
           <mt-cell title="UID" :value="uid"></mt-cell>
           <mt-cell title="手机号码" :value="phone"></mt-cell>
           <mt-cell title="邮箱地址" :value="email"></mt-cell>
           

        </div>
        
         
  </div>
</template>

<script>
import {requestPost,requestGet} from '@/api/api'
export default {
  data () {
    return {
      username:'',
      uid:'',
      phone:'',
      email:''     
           };
  },

  components: {},

  computed: {},
  created () {
    // console.log(this.$route.query)
     let userInfo=JSON.parse(localStorage.getItem('user_info'))
      // console.log(userInfo)
      this.username=userInfo.username
      this.uid=userInfo.uid
      this.phone=userInfo.mobile
      this.email=userInfo.email
  },
  methods: {
      getOrderInfo(){
         
      }
      
      
  }
}

</script>
<style lang="less" scoped>
 .product-logo{
   width: 1rem;
   height: 1rem;
   flex: 1;
   img{
     width: 100%;
     height: 100%;
   }
 }
 .r-box{
  flex: 7;
  margin: 0.2rem;
 }
 .header-box{
   padding: 0.2rem;
   background: white;
   width: 90%;
   margin: 0.2rem auto;
  //  border-radius: 0.1rem;
 }
 .box-2{
   background: white;
   padding: 0.4rem;
   width: 86%;
   margin: 0 auto;
   border-radius: 0.2rem;
 }
 .input-box{
   background: white;
   padding: 0.2rem;
   width: 90%;
   margin: 0.2rem auto;
   border-radius: 0.2rem

 }
 .mint-cell-wrapper{
  background-image: none!important;
 }
 .mint-field .mint-cell-title{
   width: 1rem;
 }
 .bottom-box{
   display: flex;
   justify-content: space-between;
   background: white;
   position: fixed;
   width: 100%;
   bottom: 0;
 }
 .b-l{
  flex: 2;
  color: #3F82DD;
 }
  .bottom-item{
    padding: 0.5rem;
    text-align: center;

  }
 .b-r{
  flex: 2;
  background: #3F82DD;
  color: white
 }
  .info-box{
    background: white;
    // width: 90%;
    padding: 0.2rem;
    margin: 0.2rem auto;
    // border-radius: 0.2rem;


  }
</style>