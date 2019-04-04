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
        暂无数据
        <!-- <profitList v-for="(item,index) in goodsList" yearProfitrate=""   :key='index' @click="toShowData()" ></profitList> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="fixedPeriod">
        暂无数据
        <!-- <mt-cell  :title="'暂无数据 '" /> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="ant">
        暂无数据
        <!-- <mt-cell  :title="'暂无数据 ' " /> -->
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import profitList from "@/components/moneyMange/revenueRanking/ProfitList/index.vue";
import requestPost from "@/api/api";
export default {
  name: "",
  components: {
    profitList
  },
  data() {
    return {
      selected: "all",
      goodsList: []
    };
  },
  created() {
    requestPost("/api/v1/goods_list", {}).then(res => {
      //  this.goodsList=res.data
      if (res.status == "success" && res.data != []) {
        res.data.forEach(item => {});
      }
    });
  }
};
</script>

<style lang="less" scoped>
.component-content.box {
  padding: 0;
  .box-title {
    padding: 0 5%;
  }
  .mint-tab-container .mint-cell {
    background: #f0f0f2;
  }
}
.mint-navbar {
  background: white;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom-width: 0.1rem;
}
</style>