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
    <!-- <div >
           <mt-cell title="提现金额" value=""></mt-cell>
            <mt-cell title="提现账户" value=""></mt-cell>
            <div class="submit-box-common">
           <mt-button type="primary" size="large" >确认</mt-button>
    </div>-->
    <!-- </div> -->
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      number: ""
    };
  },
  created() {},
  components: {},

  computed: {},

  methods: {
    withdraw() {
      let _this = this;
      this.tips(_this);
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
</style>