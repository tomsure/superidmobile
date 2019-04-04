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
      <mt-cell title="付款方式" @click.native="showPayList" is-link>
        <span>{{walletName}}</span>
      </mt-cell>
    </div>
    <div class="agree-box">
      <mt-checklist v-model="agree" :options="['我已阅读并同意']"></mt-checklist>
    </div>
    <div class="bottom-box">
      <div class="bottom-item b-l">$12000</div>
      <div class="bottom-item b-r" @click="commitOrder">提交订单</div>
    </div>
    <showPayList @walletData="getWalletData" v-if="showPayway==true"></showPayList>
  </div>
</template>

<script>
import { requestPost, requestGet } from "@/api/api";
import showPayList from "@/components/moneyMange/goodProducts/payway/paywayList.vue";
import orderHeader from "@/components/common/orderHeader.vue";

import accountInfo from "@/components/common/accountInfo.vue";
export default {
  data() {
    return {
      agree: [],
      name: "",
      companys: "",
      type: "",
      limit_money: "",
      walletName: "ETH",
      walletId: "7",
      showPayway: "false",
      headerData: null
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
    this.name = this.$route.query.name;
    this.goodsId = this.$route.query.goodsId;
     this.kind=this.$route.query.kind,
      this.type=this.$route.query.type,
      this.name=this.$route.query.name,
      this.companys=this.$route.query.companys,
      this.limit_money=this.$route.query.limit_money
    this.headerData = {
      kind: this.$route.query.kind,
      type: this.$route.query.type,
      name: this.$route.query.name,
      companys: this.$route.query.companys,
      limit_money: this.$route.query.limit_money
    };
  },
  methods: {
    commitOrder() {
      //  console.log(this.walletId)
       
      var data = {
        goods: this.goodsId,
        limit_money:this.limit_money,
        wallet_id:this.walletId
      };
       
      requestPost("api/v1/order",data).then(res => {
          if(res.data.status=='success'){
           
          // let payData={
          //   pay_no:res.data.pay_no,
          //   order_no:res.data.order_no,
          //   pay_at:res.data.pay_at
          //  }       
        this.$router.push({ path: "/pay", query: { "goodsId": this.goodsId ,"payData":res.data.data} });
          }
        
      });
    },
    showPayList() {
      this.showPayway = true;
    },
    getWalletData(data) {
      this.walletName = data.walletName;
      this.walletId = data.walletId;
        //  console.log(this.walletId)
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
  width: 90%;
  padding: 0.2rem;
  margin: 0.2rem auto;
  border-radius: 0.2rem;
}
.c-box {
  padding-bottom: 3rem;
}
.agree-box {
  background: white;
  width: 90%;
  padding: 0.2rem;
  margin: 0.2rem auto;
  border-radius: 0.2rem;
}
.mint-cell-wrapper {
  background-image: 0;
}
</style>