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
            <mt-cell title="钱包地址" class="wallet_addr" :value="orderInfoData.wallet_addr"></mt-cell>
             <mt-cell title="交易哈希值" :value="orderInfoData.wallet_txid"></mt-cell>
             
            
        </div>
          <div class="submit-box-common">
             
                <button class="submit-btn-common" @click="toMoneyMange">确定</button>
             
               
             </div>
  </div>
</template>

<script>

import {requestPost,requestGet} from '@/api/api'
import orderHeader from '@/components/common/orderHeader.vue'

import accountInfo from '@/components/common/accountInfo.vue'
import order from '@/components/common/order.vue'

export default {
  data () {
    return {
      name:'',
     
      kind:'',
      id:'',
      companys:'',
      type:'',
      limit_money:'',
      headerData:'',
      orderData:{},
      orderInfoData:{},
      txid:''
    };
  },

  components: {
    orderHeader,
    accountInfo,order,
  },

  computed: {},
  created () {
    
    this.getOrderInfo()
      requestGet('/api/v1/pay/'+this.orderData.pay_no).then(res=>{
            this.wallet_txid=res.data.data.wallet_txid
            Object.assign(this.orderData,{"wallet_txid": this.wallet_txid});
            
       })

       
       
  },
  mounted () {
     
  },
  methods: {
    
     commitOrder(){
        this.$router.push({path:'/pay',})
     },
     getOrderInfo(){
       this.orderData=this.$route.query.payData
       requestGet('/api/v1/pay/'+this.orderData.pay_no).then(res=>{
            this.txid=res.data.data.wallet_txid
           

            // console.log("wallet_txid",res.data.data.wallet_txid)
            Object.assign(this.orderData,{"wallet_txid": this.txid});
            console.log("this.orderInfoData1")
             this.orderInfoData=this.orderData
            console.log(this.orderInfoData)
       })
      //  console.log("this.orderData2:")
        // console.log(this.orderData)
        
     },
     toMoneyMange(){
       this.$router.push({path:'/'})
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
    // width: 90%;
    padding: 0.2rem;
    margin: 0.2rem auto;
    // border-radius: 0.2rem;


  }
  .mint-cell-wrapper .mint-cell-title{
  flex: 4!important;
  }
  .mint-cell-wrapper{
    color: white;
  }
  
   
</style>