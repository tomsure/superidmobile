<!-- 
 -->
<template>
  <div>
    <mt-header title="产品详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <div class="box-1">
        <div class="ft-19">蚂蚁量化精选</div>
        <div class="ft-28">48%</div>
        <div class="ft-13">年化收益</div>
      </div>
      <div class="box-2">
        <div>
          <div>投资期限</div>
          <div>180天</div>
        </div>
        <div>
          <div>
            起投金额
            <div>$10000</div>
          </div>
        </div>
      </div>
      <div class="box-3">
        <span>可汇享</span>
        <span>可变现</span>
      </div>
        <div class="cell-box">
       
        <mt-cell title="产品类型" value="稳定收益类"></mt-cell>
        <mt-cell title="发行公司" value="AntQuant"></mt-cell>
        <mt-cell title="资金投向" value=""></mt-cell>
        <mt-cell title="投资策略" value=""></mt-cell>
        <mt-cell title="收益方式" value="一次性分配"></mt-cell>
       </div>       
       <div class="cell-box">
         <mt-cell title="买卖费率" value="说明文字"></mt-cell>
         <mt-cell title="管理费率" value="说明文字"></mt-cell>
         <mt-cell title="收益规则" value="说明文字"></mt-cell>
         <mt-cell title="赎回实际" value="说明文字"></mt-cell>
         <mt-cell title="赎回费率" value="说明文字"></mt-cell>
         <mt-cell title="到账时间" value="说明文字"></mt-cell>
       </div>
         <div class="footer-box-c">
            <div class="left-box ft-20">$1000</div>
            <div class="right-box ft-14"  >立即投资</div>
         </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {}
};
</script>
<style  scoped>
.box-1 {
  text-align: center;
  padding: 0.5rem;
  background: #8484f5;
  color: white;
}
.box-2 {
  display: flex;
  justify-content: space-around;
  background: white;
  padding: 0.2rem 0;
}
.box-3{
  padding: 0.2rem 0.3rem;
  background: white;
  margin:0.3rem 0;
}
.cell-box{
  margin: 0.2rem 0;
}
.footer-box-c{
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size:'';
}
.left-box{
  background: white;
  color: #888888;
  /* flex: 20; */
  width: 60%;
  padding:0.5rem;
}
.right-box{
  background: #FD5E5F;
  color: white;
  /* flex: 15; */
   width: 40%;
   padding:0.5rem;
}
</style>