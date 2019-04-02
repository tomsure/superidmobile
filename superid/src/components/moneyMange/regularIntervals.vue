<!--  -->
<template>
  <div>
    <mt-header title="定期理财">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="component-content">
      <div>
        <div class="box-c">
          <div class="box-1">
             <div class="ft-19">蚂蚁量化精选</div>
          <div class="ft-28" style="color:#E51C23;">48%</div>
          <div class="ft-13" style="color:#AAAAAA;">年化收益</div>
          </div>
          <div class="box-2">
            <div>180天</div>
            <div>$10000起购</div>
            <div>稳定收益类</div>
          </div>
          <div class="btn-box">
            <mt-button type="primary" size="large" @click="toProductDetails()">立即投资</mt-button>
          </div>
        </div>
        <div class="box-title">热门产品</div>
        <ProfitList></ProfitList>
      </div>
    </div>
  </div>
</template>

<script>
import ProfitList from "@/components/moneyMange/revenueRanking/ProfitList/index.vue";
export default {
  data() {
    return {};
  },
  components: {
    ProfitList
  },

  computed: {},

  methods: {
    toProductDetails(){
      this.$router.push({path:'/productDetails'})
    }
  }
};
</script>
<style  scoped>
 .box-c{
   background: white;
   border-radius: 7px;
   margin:0.2rem 0;
   padding:0.5rem;

 }
.box-title {
  padding: 0.1rem;
}
.box-1{
  text-align:center;
  margin-bottom: 0.6rem;
}
.box-2{
  display: flex;
  justify-content: space-around;
  margin-bottom:0.3rem;
  color: #AAAAAA;
}
</style>