<template>
  <div class="component-content box"> 
    <h3 class="box-title">收益排行</h3>
      <mt-navbar v-model="selected">
  <mt-tab-item id="all">全部产品</mt-tab-item>
  <mt-tab-item id="fixedPeriod">定期理财</mt-tab-item>
  <mt-tab-item id="ant">蚂蚁搬砖</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="all">
    <!-- <mt-cell  :title="'内容 '" /> -->
     <profitList></profitList>
      <profitList></profitList>
       <profitList></profitList>
        <profitList></profitList>
  </mt-tab-container-item>
  <mt-tab-container-item id="fixedPeriod">
    <mt-cell  :title="'测试 '" />
  </mt-tab-container-item>
  <mt-tab-container-item id="ant">
    <mt-cell  :title="'选项 ' " />
  </mt-tab-container-item>
</mt-tab-container>
  </div>
</template>

<script>

import profitList from '@/components/moneyMange/revenueRanking/ProfitList/index.vue'
export default {
  name: '',
  components:{
  profitList
  },
  data() { 
    return {
     selected:'all'
    }
  }
 }
</script>

<style lang="less" scoped>
.component-content.box{
  padding: 0;
  .box-title{
    padding: 0 5%;
  }
  .mint-tab-container .mint-cell{
    background: #F0F0F2;
  }


}
.mint-navbar{
background: white;
}
</style>