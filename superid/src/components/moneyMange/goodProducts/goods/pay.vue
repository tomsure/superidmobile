<!--  -->
<template>
  <div>
      <div>
         <div></div>
         <div class="t-center" >
            <h4 class="status-t">付款中</h4>
              <div class="qrcode-img">
                <!-- <img src="@/assets/qrcode.png" alt=""> -->
                 <div id="qrcode" class="qrcode-box"></div>
              </div>
              <div class="t-area">
                <mt-field  placeholder="请输入交易TXID(交易哈希值)" v-model="txid" type="textarea" rows="2" ></mt-field>
              </div>
             <div class="submit-box-common">
               <button class="submit-btn-common" @click="confirmPay">我已付款</button>
             </div>
         </div>
      </div>
  </div>
</template>

<script>
import {requestPost} from  '@/api/api.js'
 import QRCode from 'qrcodejs2';
export default {
  data () {
    return {
      txid:''
    };
  },
  components: {},
  computed: {},
  created () {
    console.log("payData")
     let payData=this.$route.query.payData
         console.log(payData)

         let sendData={
            pay_no:this.$route.query.payData.pay_no,
            order_no:this.$route.query.payData.order_no,
            pay_at:this.$route.query.payData.pay_at
           }    

           this.$nextTick (function () {
          this.qrcode('442344');
        })

  },
  methods: {
    confirmPay(){
     
          let sendData={
            pay_no:this.$route.query.payData.pay_no,
            order_no:this.$route.query.payData.order_no,
            pay_at:this.$route.query.payData.pay_at,
            wallet_addr:this.$route.query.payData.wallet_addr,
            create_at:this.$route.query.payData.create_at,
            money:this.$route.query.payData.money,
            pay_currency_num:this.$route.query.payData.pay_currency_num,
            wallet_name:this.$route.query.payData.wallet_name
           }    
          //  console.log("sendData")
          //  console.log(sendData)
         let confirmData={
           pay_no:sendData.pay_no,
           txid:this.txid
         }
       requestPost('/api/v1/pay',confirmData).then(res=>{
           this.$router.push({path:'/orderoInfo',query:{"goodsId":this.$route.query.goodsId,"payData":sendData}})
       })
     
    },
      qrcode (wallet_addr) {
        let qrcode = new QRCode('qrcode', {
          width: 100,
          height:100, // 高度
          text: wallet_addr, // 二维码内容
        })
      },
    
  }
}

</script>
<style lang='less'  scoped>
 .qrcode-img{
  width: 5rem;
  height: 5rem;
  margin: 0 auto;
  overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
 }
 .status-t{
   margin:0.2rem;
 }
 .t-area{
   width: 90%;
   margin: 0 auto;
   background: #F8F8F8;
 }
 .mint-field.is-textarea{
  background: #F8F8F8;
 }
//  #qrcode img{
//    width: 100%!important;
//    height: 100%!important;
//    border: 1px solid red;
//  }
 #qrcode {
    display: inline-block;
    background: #F8F8F8;
    img {

      // width: 3rem;
      // height: 3rem;
      // background-color: #fff; //设置白色背景色
      // padding: 6px; // 利用padding的特性，挤出白边
    }
  }


</style>