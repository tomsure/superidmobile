<template>
  <div class="">
    <mt-header title="收款">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
   
</mt-header>
  <div class="addr-box">
     <div class="addr addrtext">eqdqjdoqhdojqoijdoqdqwowijfowjfqw</div>
      <div class="addr">
         <span class="copy-btn">复制钱包地址</span>
      </div>
  </div>
    <div class="qrCode">
        <img src="./1.png" alt="">
    </div>
     <div>
         <mt-field label="收款金额" placeholder="请输入收款金额" >
            <span @click="selectAssetType"><span>ETH</span><span class="icon-1"></span></span>
         </mt-field>
     </div>
      
  </div>
</template>

<script>

export default {
  name: '',
  
  data() { 
    return {
     
    }
  },
  methods:{
    selectAssetType(){
      this.$router.push({path:'/assetTypeList'})
    }
  }
 }
</script>

<style lang="less" scoped>
.select-box{
  position: fixed;
    left: 0;
    /* top: 0; */
    width: 100%;
    height: 100%;
    opacity: .5;
    background: #000;
    z-index: 100
}
 .select-title{
    text-align: center;
   
 }
 .titleIcon{
   float: left;
   position: relative;
   left: 5%;
   top: 0.1rem;


 }
 .item{
   
 }
 .addr-box{
   padding: 0.7rem 0.5rem;
   text-align: center;
   background: #5677FD;
   border-radius: 0.1599147121535181rem;
   width: 85%;
   margin: 0 auto;
   color: white;
   margin-top: 0.5rem;
   }
   .addrtext{
     font-size:0.3198294243070362rem;
     margin-bottom: 0.2rem;
   }
   .copy-btn{
     font-size:0.373134328358209rem;
     
   }
    .qrCode{
       width: 5.330490405117271rem;
       height: 5.330490405117271rem;
       
     margin: 0.7rem auto;
      }
      img{
         width: 100%;
         height:100%;
         
         }
</style>