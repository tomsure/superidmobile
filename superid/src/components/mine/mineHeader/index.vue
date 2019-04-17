<!--  -->
<template>
  <div class="content">
    <div style="display:flex;text-align:center;">
      <div class="top">
        <div class="logo">
          <img src="../../../assets/logo.png" alt>
        </div>
        <div style="margin-top:0.2rem;line-height:2;">{{userName}}</div>
        <!-- <span class="level"><img src="@/assets/level.png" alt=""> </span><span class="level-data">{{level}}</span> -->
      </div>
    </div>
    <div class="middle-box">
     
        <div style="flex:1;display:flex;justify-content:center;">
          
          <div>
            <div class="assets-text">产品资产($)</div>
          <div class="total-data">{{fund_asset}}</div>
          </div>
          <div>
           <span class="icon--2 text-left" @click="withdraw(0,'产品资产提现')"></span>
         </div>
        </div>
        <!-- <span
          style="flex:1;text-align:right;"
          class="icon--2"
          @click="toAsset"
        ></span> -->
      
    </div>

    <div class="header-bottom" style>
      <div style="flex:1;text-align:center;display:flex;justify-content:center;">
        <div style="">
          <div class="noPadding assets-text">可用余额($)</div>
        <div class="noPadding assets-data">{{balance}}</div>
         
        </div>
         <div>
           <span class="icon--2 text-left" @click="withdraw(1,'收益提现')"></span>
         </div>
      </div>
      <div style="flex:1;text-align:center;">
        <div class="noPadding assets-text">昨日收益($)</div>
        <div class="noPadding assets-data">+{{yesterdayProfit}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestPost, requestGet } from "@/api/api.js";
export default {
  data() {
    return {
      type:'',
      level:'S1',
      logUrl: "", //头像
      userName: "", //用户名
      fund_asset: "0", //总资产
      balance: "0", //可用余额
      yesterdayProfit: "0" //昨日收益
    };
  },
  props: [],
  created() {
    this.getAssets();
  },
  mounted() {
    if (localStorage.getItem("user_info")) {
      this.userName = JSON.parse(localStorage.getItem("user_info")).username;
      this.asstes = JSON.parse(localStorage.getItem("user_info")).asstes;
    }
  },
  components: {},

  computed: {},

  methods: {
    withdraw(asset_type,type){
     this.$router.push({name:'withdraw',params:{asset_type:asset_type,type:type,fund_asset:this.fund_asset}})
    },
    toAsset() {
      // this.$router.push({ name: "Asset" });
    },
    getAssets() {
      
      requestGet("api/v1/asset").then(res => {
        if ((res.data.status = "success")) {
          this.fund_asset=res.data.data.fund_asset
           this.balance=res.data.data.balance
           this.yesterdayProfit=res.data.data.yesterday_profit
        }
      });
    }
  }
};
</script>
<style lang="less"  scoped>
.topc {
  flex: 1;
  text-align: center;
  /* border: 1px solid red; */
  padding: 25px;
  display: flex;
  align-items: center;
}
.top {
  display: flex;
  justify-content: space-between;
}
  .middle-box{
    display: flex;
    margin: 0.5rem 0;
  }
.top-right,
.top-left {
  display: flex;
  justify-content: space-between;
}

.logo {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  /* border: 1px solid red; */
  overflow: hidden;
}
.logo img {
  width: 100%;
  height: 100%;
}
.content {
  font-size: 0.5rem;
  padding: 0.5rem;
}
.header-bottom {
  display: flex;
  text-align: center;
  /* border-top: 1px solid #324c7b; */
}
.header-bottom div {
  /* padding:0.5rem auto;
        */
  // padding-top: 0.5rem;
  // padding-bottom: 0.5rem;
}
* {
  background-color: #8484F5;
  color: white;
}
.noPadding {
  padding: 0 !important;
}
.icon--2::before {
  color: white;
}

.assets-data {
  font-size: 0.373134328358209rem;
}
.assets-text {
  font-size: 0.3198294243070362rem;
  margin-bottom: 0.2rem;
  text-align: center;
}
.total-data {
  font-size: 0.5863539445628998rem;
  text-align: center;
}
 .level{
   /* background-image: url("@/assets/level.png"), */
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    position: relative;
    top: 0.4rem;
    left: 0.1rem;
    img{
      width:100%;
      height:100%
    }
 }
 .level-data{
   position: relative;
   top: 0.5rem;
   right: 0.38rem;
   background: rgba(0,0,0,0);
   font-size:0.35rem;
  //  right: 2rem;
 }
  .text-left{
    flex:1;
    text-align:right;
    
    
    line-height: 4;
    font-size: 0.3rem;
    margin-left: 0.3rem;
  }
</style>