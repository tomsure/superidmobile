<!--  -->
<template>
  <div>
    <mt-header title="资产总览" class="headetStyle">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="header-content">
      <div class="asset-data center">
        <span style="font-size:0.373134328358209rem;">资产总览($)</span>
        <span class="icon-16" @click="setText"></span>
      </div>
      <div class="asset-data center t-font-size">{{totalAsset}}</div>
      <div class="t-money">
        <div>
          <div class="b-text">可用金额</div>
          <div>{{balance}}</div>
        </div>
        <div>
          <div class="b-text">昨日收益</div>
          <div>+{{yesterdayProfit}}</div>
        </div>
      </div>
    </div>
    <div>
      <AssetList></AssetList>
    </div>
  </div>
</template>

<script>
import AssetList from "@/components/mine/asset/assetList/index.vue";
import { requestGet } from "@/api/api.js";
export default {
  data() {
    return {
      totalAsset: "", //总资产
      balance: "", //可用余额
      yesterdayProfit: "" //昨日收益
    };
  },

  components: {
    AssetList
  },
  created() {
    this.getAssets();
  },
  computed: {},

  methods: {
    getAssets() {
      requestGet("api/v1/asset").then(res => {
        if ((res.data.status = "success")) {
          if (res.data.data) {
            this.totalAsset = res.data.data.total_asset;
            this.balance = res.data.data.balance;

            this.yesterdayProfit = res.data.data.yesterday_profit;
          }
        }
      });
    },
    setText() {
      // if(){
      // }
    }
  }
};
</script>
<style  scoped>
.mint-header.headetStyle {
  font-size: 0.453091684434968rem;
  line-height: 2;
}
.header-content {
  background: #26a2ff;
  padding-bottom: 0.5rem;
}
.asset-data {
  text-align: center;
  color: aliceblue;
}
.t-money {
  display: flex;
}

.t-font-size {
  font-size: 0.5333333333333333rem;
  margin-top: 0.1rem;
}
.t-money div {
  flex: 1;
  text-align: center;
  font-size: 0.3733333333333333rem;
  color: white;
}
.b-text {
  margin-bottom: 0.2rem;
}
.icon-16::before {
  /* font-size: */
  color: white;
}
</style>