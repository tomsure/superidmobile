<!--  -->
<template>
  <div>
    <mt-header title="订单信息">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <orderHeader :headerData="headerData"></orderHeader>
    <accountInfo></accountInfo>
    <!-- <order :orderData='orderInfoData'></order> -->
    <div class="info-box">
      <h4>订单信息</h4>
      <mt-cell title="定单号" :value="orderInfoData.order_no"></mt-cell>
      <mt-cell title="购买时间" :value="orderInfoData.create_at"></mt-cell>
      <mt-cell title="付款金额" :value="orderInfoData.money"></mt-cell>
      <mt-cell title="付款比币种金额" :value="orderInfoData.pay_currency_num + orderInfoData.wallet_name"></mt-cell>
      <mt-cell title="钱包地址" class="grid-style set-grid" :value="orderInfoData.wallet_addr"></mt-cell>
      <mt-cell title="交易哈希值" class="grid-style set-grid" :value="orderInfoData.wallet_txid"></mt-cell>
      <mt-cell title="状态" :value="statusData"></mt-cell>
    </div>
    <div class="submit-box-common">
      <button class="submit-btn-common" @click="toMoneyMange">确认</button>
    </div>
  </div>
</template>

<script>
import { requestPost, requestGet } from "@/api/api";
import orderHeader from "@/components/common/orderHeader.vue";

import accountInfo from "@/components/common/accountInfo.vue";
import order from "@/components/common/order.vue";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      name: "",

      kind: "",
      id: "",
      companys: "",
      type: "",
      limit_money: "",
      headerData: "",
      orderData: {},
      orderInfoData: {},
      txid: "",
      status: "",
      statusData: ""
    };
  },

  components: {
    orderHeader,
    accountInfo,
    order
  },

  computed: {},
  created() {
    this.getOrderInfo();
    requestGet("/api/v1/pay/" + this.orderData.pay_no).then(res => {
      let data = res.data.data;
      this.wallet_txid = data.wallet_txid;

      Object.assign(this.orderData, { wallet_txid: this.wallet_txid });
    });
  },
  mounted() {},
  methods: {
    commitOrder() {
      this.$router.push({ path: "/pay" });
    },
    getOrderInfo() {
      this.orderData = this.$route.query.payData;
      requestGet("/api/v1/pay/" + this.orderData.pay_no).then(res => {
        let data = res.data.data;
        this.txid = data.wallet_txid;
        this.statusData = data.status;
        if (data.status == 1) {
          this.statusData = "待审核";
        } else if (data.status == 2) {
          this.statusData = "付款成功";
        } else if (data.status == 3) {
          this.statusData = "付款失败";
        }
        Object.assign(this.orderData, {
          wallet_txid: this.txid,
          status: this.statusData
        });

        this.orderInfoData = this.orderData;
      });
    },
    dialog(){
     this.$router.push({ path: "/" });
    //  clearTimeout(this.dialog)
    },
    toMoneyMange() {
      Toast({
        message: "交易提交成功，请联系相关人员进行交易确认，稍后查询资产信息",
        position: "top",
        duration: 2000
      });
       setTimeout(this.dialog, 2000);
      
    }
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
.mint-cell-wrapper .mint-cell-title {
  flex: 4 !important;
}
.mint-cell-wrapper {
  color: white;
}

</style>