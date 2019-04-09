<!--  -->
<template>
  <div>
    <div class="info-box">
      <mt-cell title="可提现金额" value></mt-cell>
      <mt-field label="提现金额" placeholder="请输入提现金额" type="number" v-model="number"></mt-field>
      <div class="tips">提现金额不得低于可用余额</div>
    </div>
    <div>
      <div class="t-center addr-box">
        <img src="@/assets/qrcode.png" alt="二维码">
      </div>

      <div class="t-center">收款钱包地址</div>
    </div>
    <div class="submit-box-common">
      <mt-button type="primary" size="large" @click="withdraw">提现</mt-button>
    </div>
      <mt-popup
  v-model="popupVisible"
  popup-transition="popup-fade">
     <div class="prop-content">
        <span>13213</span>
        <span>1313</span>
     </div>
     <div class="prop-content">
        <span>13213</span>
        <span>1313</span>
     </div>
     <div class="prop-content">
        <span>13213</span>
        <span>1313</span>
     </div>
</mt-popup>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import {requestPost,requestGet} from '@/api/api.js'
export default {
  data() {
    return {
      popupVisible:'',
      number: "",
      withdraw_money:'',
      code:'',
      wallets:{
        name:'',
        addr:''

      },
      


    };
  },
  created() {
    this.getWallet();
  },
  components: {},

  computed: {},

  methods: {
    withdraw() {
      let _this = this;
      // this.tips(_this);
         requestPost(
          "/api/v1/withdraw",
          {
            wallet_name: this.wallets.name,
            wallet_addr: this.wallets.addr,
            money: this.withdraw_money,
            code: this.code
          },).then(res=>{

         })
    },
    getWallet(){
      requestGet('/api/v1/wallet/get_default_wallet').then(res=>{
          if (res.data.status == "success") {
            this.wallets = res.data.data;
          } else {
            MessageBox({
        title: "提示",
        message: '还没有设置钱包信息！请去设置钱包'
      })
          }
      })
    },
    tips(_this) {
      let msg = `
      <div  class="">
        <span>提现金额:</span> <span></span>
         </div>
         <div>
           <span>提现账户:</span> <span>4242</span>
         </div>
         <div>
           <span>提现状态:</span> <span>人工正在审核，请稍后查询</span>
         </div>
     </div>
    `;
      MessageBox({
        title: "提示",
        message: msg
      }).then(function() {
        console.log(123);
        _this.$router.push({ path: "/mine" });
      });
    }
  }
};
</script>
<style lang='less'  scoped>
.addr-box {
  width: 60%;
  margin: 0.2rem auto;
  
  img {
    width: 100%;
    height: 100%;
  }
  
} 
.info-box{
   background: white;
  }
  .tips{
    text-align:center;
    position: relative;
    bottom: 0.2rem;
    color: red;
  }
  .prop-content{
    width: 100%;
    display: flex;
    span{
      display: inline-block;
      width: 100%;
    }
  }
</style>