<!--  -->
<template>
  <div>
     
      
      <!-- // -->
       <!-- // -->
       
       <!-- // -->
        
        <div class="info-box">
          <h4>订单信息</h4>
           <mt-cell title="定单号" :value="orderInfoData.order_no"></mt-cell>
           <mt-cell title="购买时间" :value="orderInfoData.create_at"></mt-cell>
           <mt-cell title="付款金额" :value="orderInfoData.money"></mt-cell>
           <mt-cell title="付款比币种金额" :value="orderInfoData.pay_currency_num + orderInfoData.wallet_name"></mt-cell>
            <mt-cell title="钱包地址" :value="orderInfoData.wallet_addr"></mt-cell>
             <mt-cell title="交易哈希值" :value="orderInfoData.wallet_txid"></mt-cell>
             <mt-cell title="交易哈希值" :value="orderInfoData.wallet_txid"></mt-cell>
            
        </div>
        
  </div>
</template>

<script>
import {requestPost,requestGet} from '@/api/api'
export default {
  data () {
    return {
      name:'',
      type:'',
      kind:'',
      id:'',
      companys:'',
      type:'',
      limit_money:'',

       orderInfoData:{
     create_at:'',
     money:'',
     order_no:'',
     pay_currency_num:'',
     wallet_addr:'',
     wallet_name:'',
     wallet_txid:''
     }
     

    };
  },

  components: {},
  props: ['orderData'],
  computed: {},
  created () {
     this.getGoodsInfo()
     this.name=this.$route.query.name
    //  console.log(this.$route.query)
    this.orderInfoData=this.orderData
     console.log(this.orderInfoData)
  },
  methods: {
     getGoodsInfo(){
        requestGet('/api/v1/goods/'+ this.$route.query.goodsId,).then(res=>{
          this.limit_money=res.data.data[0].limit_money
           this.name=res.data.data[0].name
           this.type=res.data.data[0].type_name
           this.kind=res.data.data[0].name
           this.companys=res.data.data[0].companys
           this.id=res.data.data[0].id
        })
     },
     commitOrder(){
        this.$router.push({path:'/pay',})
     }
      
  }
}

</script>
<style lang="less" scoped>
 .product-logo{
   width: 1rem;
   height: 1rem;
   flex: 1;
   img{
     width: 100%;
     height: 100%;
   }
 }
 .r-box{
  flex: 7;
  margin: 0.2rem;
 }
 .header-box{
   padding: 0.2rem;
   background: white;
   width: 90%;
   margin: 0.2rem auto;
   border-radius: 0.1rem;
 }
 .box-2{
   background: white;
   padding: 0.4rem;
   width: 86%;
   margin: 0 auto;
   border-radius: 0.2rem;
 }
 .input-box{
   background: white;
   padding: 0.2rem;
   width: 90%;
   margin: 0.2rem auto;
   border-radius: 0.2rem

 }
 .mint-cell-wrapper{
  background-image: none!important;
 }
 .mint-field .mint-cell-title{
   width: 1rem;
 }
 .bottom-box{
   display: flex;
   justify-content: space-between;
   background: white;
   position: fixed;
   width: 100%;
   bottom: 0;
 }
 .b-l{
  flex: 2;
  color: #3F82DD;
 }
  .bottom-item{
    padding: 0.5rem;
    text-align: center;

  }
 .b-r{
  flex: 2;
  background: #3F82DD;
  color: white
 }
  .info-box{
    background: white;
    width: 90%;
    padding: 0.2rem;
    margin: 0.2rem auto;
    border-radius: 0.2rem;


  }
</style>