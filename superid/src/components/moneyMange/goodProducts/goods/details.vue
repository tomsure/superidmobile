<!--  -->
<template>
  <div class="c-box">
    <mt-header title="核对订单信息">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <orderHeader :headerData="headerData"></orderHeader>

    <accountInfo></accountInfo>
    <div class="info-box">
      <!-- <mt-cell title="付款方式" @click.native="showPayList" is-link> -->
        <mt-cell title="付款方式"  is-link>
        <span>{{walletName}}</span>
         <!-- <span>ETH</span> -->
      </mt-cell>
    </div>
    <div class="agree-box">
      <mt-cell>
        <mt-checklist v-model="agree" :options="['我已阅读并同意']"></mt-checklist>
        <span class="protocol">服务及隐私协议</span>
      </mt-cell>
    </div>
    <div class="bottom-box">
      <div class="bottom-item b-l">$ {{buy_money}}</div>
      <div class="bottom-item b-r" @click="commitOrder">提交订单</div>
    </div>
    <div :class="payWayModal">
      <div class="payWayModal-c">
        <showPayList @walletData="getWalletData"></showPayList>
      </div>
    </div>
    <div :class="payModal">
      <div class="t-center modal-c">
        <h4 class="status-t">
          付款中
          <span @click="closeModal" class="close-icon">X</span>
        </h4>
        <div class="qrcode-img">
          <div id="qrcode" class="qrcode-box"></div>
        </div>
         <div><div class="wallet_addr center-box">{{wallet_addr}}</div>
         <button class="copy-btn" 
         @click="copyAddr"
            v-clipboard:copy="copyText"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
         >复制钱包地址</button></div>

        <div class="t-center tip-red">可扫描二维码或点击二维码保存在手机上</div>
        <div class="t-area">
          <mt-field placeholder="请输入交易TXID(交易哈希值)" v-model="txid" type="textarea" rows="2"></mt-field>
        </div>
        <div class="submit-box-common box-bottom">
          <button class="submit-btn-common" @click="confirmPay">我已付款</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestPost, requestGet } from "@/api/api";
import showPayList from "@/components/moneyMange/goodProducts/payway/paywayList.vue";
import orderHeader from "@/components/common/orderHeader.vue";

import accountInfo from "@/components/common/accountInfo.vue";
import { Toast } from "mint-ui";
import { Clipboard } from "clipboard";

import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      agree: [],
      msg:'',
      copyText:'',
      buy_money:'',
      name: "",
      companys: "",
      type: "",
      limit_money: "",
      walletName: "USDT",
      walletId: "9",
      showPayway: "false",
      headerData: null,
      payModal: "hide",
      payWayModal: "hide",
      txid: "",
      pay_no: "",
      order_no: "",
      pay_at: "",
      wallet_addr: "",
      create_at: "",
      money: "",
      pay_currency_num: "",
      wallet_name: "",
    
    };
  },

  components: {
    showPayList,
    accountInfo,
    orderHeader
  },

  computed: {},
  created() {
    //  this.getGoodsInfo()
    //  console.log(this.$route.query)
    this.name = this.$route.query.name;
    this.goodsId = this.$route.query.goodsId;
    (this.kind = this.$route.query.kind),
      (this.type = this.$route.query.type),
      (this.name = this.$route.query.name),
      (this.companys = this.$route.query.companys),
      (this.limit_money = this.$route.query.limit_money);
      this.buy_money=this.$route.query.buy_money
    this.headerData = {
      kind: this.$route.query.kind,
      type: this.$route.query.type,
      name: this.$route.query.name,
      companys: this.$route.query.companys,
      limit_money: this.$route.query.limit_money
    };

    //  二维码
    let payData = this.$route.query.payData;

    //
  },
  methods: {
     copyAddr(){
      this.copyText=this.wallet_addr
      this.msg='复制成功！'
    }, 
    onCopy(e){

     Toast({
          message:this.msg,
          position: "top",
          duration: 2000
        });
    },
    // 复制失败
    onError(e){
      
      Toast({
          message: "请重新选择复制",
          position: "top",
          duration: 2000
        });
    },
    commitOrder() {
      var data = {
        goods: this.goodsId,
        limit_money: this.buy_money,
        wallet_id: this.walletId
      };
      if (this.agree.length == 0) {
        Toast({
          message: "请选择同意协议内容",
          position: "middle",
          duration: 2000
        });
      } else {
        requestPost("api/v1/order", data).then(res => {
          if (res.data.status == "success") {
            this.pay_no = res.data.data.pay_no;
            this.order_no = res.data.data.order_no;
            this.pay_at = res.data.data.pay_at;
            this.wallet_addr = res.data.data.wallet_addr;
            this.create_at = res.data.data.create_at,
              this.money = res.data.data.money,
              this.pay_currency_num = res.data.data.pay_currency_num,
              this.wallet_name = res.data.data.wallet_name;
            this.showModal(this.wallet_addr);
          }
        });
      }
    },
    showPayList() {
      this.payWayModal = "slideInUp animated show";
    },
    getWalletData(data) {
      this.walletName = data.walletName;
      this.walletId = data.walletId;
     
      this.payWayModal = "slideOutDown hide";
    },
    showModal(wallet_addr) {
      this.payModal = "slideInUp animated show";
      this.$nextTick(function() {
        this.qrcode(wallet_addr);
      });
    },
    confirmPay() {
      let sendData = {
        pay_no: this.pay_no,
        order_no: this.order_no,
        pay_at: this.pay_at,
        wallet_addr: this.wallet_addr,
        create_at: this.create_at,
        money: this.money,
        pay_currency_num: this.pay_currency_num,
        wallet_name: this.wallet_name,
        

      };

      let confirmData = {
        pay_no: this.pay_no,
        txid: this.txid
      };
          let reg=/^[A-Za-z0-9]{50,80}$/;
         if(this.txid=='' || !reg.test(this.txid)){
             Toast({
          message: "请输入正确的交易哈希值",
          position: "middle",
          duration: 2000
        });
         }else{
           requestPost("/api/v1/pay", confirmData).then(res => {
        this.$router.push({
          path: "/orderoInfo",
          query: { goodsId: this.$route.query.goodsId, payData: sendData }
        });
      });
         }
     
    },
    qrcode(wallet_addr) {
      let qrcode = new QRCode("qrcode", {
        // width: 300,
        // height:300, // 指定高度
        text: wallet_addr // 二维码内容
      });
    },
    closeModal() {
      this.payModal = "slideOutDown hide";
    },
   
  }
};
</script>

<style lang="less" scoped>
.product-logo {
  width: 1rem;
  height: 1rem;
  flex: 1;
  img {
    width: 100%;
    height: 100%;
  }
}

.r-box {
  flex: 7;
  margin: 0.2rem;
}

.header-box {
  padding: 0.2rem;
  background: white;
  width: 90%;
  margin: 0.2rem auto;
  border-radius: 0.1rem;
}

.box-2 {
  background: white;
  padding: 0.4rem;
  width: 86%;
  margin: 0 auto;
  border-radius: 0.2rem;
}

.input-box {
  background: white;
  padding: 0.2rem;
  width: 90%;
  margin: 0.2rem auto;
  border-radius: 0.2rem;
}

.mint-cell-wrapper {
  background-image: none !important;
}

.mint-field .mint-cell-title {
  width: 1rem;
}

.bottom-box {
  display: flex;
  justify-content: space-between;
  background: white;
  position: fixed;
  width: 100%;
  bottom: 0;
}

.b-l {
  flex: 2;
  color: #3f82dd;
}

.bottom-item {
  padding: 0.5rem;
  text-align: center;
}

.b-r {
  flex: 2;
  background: #3f82dd;
  color: white;
}

.info-box {
  background: white;
  // width: 90%;
  padding: 0.2rem;
  margin: 0.2rem auto;
  // border-radius: 0.2rem;
}

.c-box {
  padding-bottom: 3rem;
}

.agree-box {
  // background: white;
  width: 95%; // padding: 0.2rem;
  margin: 0.2rem auto; // border-radius: 0.2rem;
}

.protocol {
  color: #4183dd;
  position: relative;
  top: 0.1rem;
  right: 0.1rem;
}

.hide {
  display: none;
}

.show {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1); //  opacity:0.1;
  position: fixed;
  bottom: 0;
  animation-duration: 500ms;
}

.qrcode-img {
  width: 5rem;
  height: 5rem;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 0.2rem;
  margin: 0.2rem auto;
}

.qrcode-box {
  width: 5rem;
  height: 5rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}

.status-t {
  padding: 0.2rem;
  font-size: 0.5rem;
}

.t-area {
  width: 90%;
  margin: 0 auto;
  background: #f8f8f8;
  textarea.mint-field-core {
    background: #f8f8f8 !important;
  }
}

.mint-cell-value textarea.mint-field-core {
  background: #f8f8f8 !important;
}

.mint-field.is-textarea {
  background: #f8f8f8;
}

#qrcode {
  display: inline-block;
  background: #f8f8f8;
}

.modal-c {
  background: white;
  margin-top: 5rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.payWayModal-c {
  background: #d8d8d9;
  margin-top: 5rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.box-bottom {
  padding: 0 0.2rem;
}

.close-icon {
  display: inline-block;
  float: right;
  color: #bfc0c0;
  position: relative;
  right: 0.2rem;
}

.tip-red {
  color: red;
  margin: 0.2rem 0;
  font-size: 0.3rem;
}
 .wallet_addr{
   word-break: break-all;
   display: inline-block;
 }
 .copy-btn{
   border:0;
   background: #2b81ee;
   color: white;
   padding: 0.1rem;
    border-radius: 0.1rem;

 }
</style>