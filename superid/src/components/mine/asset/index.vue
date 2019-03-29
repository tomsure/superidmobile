<!--  -->
<template>
  <div>
    <mt-header title="资产总览" class="headetStyle">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
     <div class="header-content">
         <div class="asset-data center"><span style="font-size:0.373134328358209rem;">资产总览($)</span><span></span>***</div>
         <div class="asset-data center t-font-size">
             333,2322
         </div>
         <div class="t-money">
           <div>
              <div class="b-text">可用金额</div>
              <div>2212,11</div>
           </div>
           <div>
             <div class="b-text">昨日收益</div>
             <div>+12331</div>
           </div>
         </div>
     </div>
           <div>
             <AssetList></AssetList>
           </div>
  </div>
</template>

<script>
 import AssetList from '@/components/mine/asset/assetList/index.vue'
export default {
  data() {
    return {};
  },

  components: {
    AssetList
  },

  computed: {},

  methods: {}
};
</script>
<style  scoped>
     .mint-header.headetStyle{
       font-size:0.453091684434968rem;
       line-height:2;
     }
  .header-content{
     background: #26a2ff;
     padding-bottom: 0.5rem;
  }
  .asset-data{
    text-align: center;
    color: aliceblue;
  }
  .t-money{
    display:flex;
  }
   
  .t-font-size{
    font-size: 0.5333333333333333rem;
    margin-top: 0.1rem;
  }
  .t-money div{
    flex: 1;
    text-align: center;
     font-size: 0.3733333333333333rem;
     color: white;
  }
  .b-text{
    margin-bottom: 0.2rem;
  }
</style>