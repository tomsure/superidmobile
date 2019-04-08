<!--  -->
<template>
  <div class="">
      
      <div class="flex-box header-box">
         <div class="product-logo">
           <img src="@/assets/1.png" alt="">
         </div>
         <div class="r-box">
           <div class="flex-box">
             <div>{{name}}</div>
             <div>最低起投金额：$ {{limit_money}}</div>
           </div>
           <div>{{name}}</div>
         </div>
      </div>
      <!-- // -->
        <div class=" flex-box-sp-ard box-2">
          <div>
            <span>产品类别:</span><span>{{type}}</span>
          </div>
          <div>
             <span>发行公司:</span><span>{{companys}}</span>
          </div>
          <div>
             <span>产品分类:</span><span>{{kind}}</span>
          </div>
        </div>
        
         
  </div>
</template>

<script>

import {requestPost,requestGet} from '@/api/api'

export default {
  data () {
    return {
       agree:[],
      name:'',
      companys:'',
      limit_money:'',
      kind:'',
      type:'',
      companys:'',
      walletName:'ETH',
      walletId:'',
      showPayway:'false'


    };
  },
  components: {
    
  },

  computed: {},
  created () {
        
         this.getGoodsInfo()
              

            
  },
  methods: {
    
     commitOrder(){
         var data={
           goods:this.goodsId,
           limit_money:'',
           wallet_id:this.walletId
         }
         requestPost('api/v1/order',data).then(res=>{
            this.$router.push({path:'/pay',query:{goodsId:this.goodsId}})
            
        })
        
     },
     showPayList(){
       this.showPayway=true
     },
     getWalletData(data){
       this.walletName=data.walletName
       this.walletId=data.walletId
     },
     getGoodsInfo(){
        requestGet('/api/v1/goods/'+ this.$route.query.goodsId,).then(res=>{
          this.limit_money=res.data.data[0].limit_money
           this.name=res.data.data[0].name
           this.type=res.data.data[0].type_name
           this.kind=res.data.data[0].name
           this.companys=res.data.data[0].companys
           this.id=res.data.data[0].id
           this.headerData={
            name:this.name,
            type:this.type,
            kind:this.kind,
            id:this.id,
            companys:this.companys,
            limit_money:this.limit_money
         }
         
        })
          
          
     },
      
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
  //  padding: 0.2rem;
   background: white;
  //  width: 90%;
   margin: 0.2rem auto;
  //  border-radius: 0.1rem;
 }
 .box-2{
   background: white;
    padding: 0.4rem 0.2rem;
    // width: 90%;
    margin: 0.2rem auto;
    // border-radius: 0.15rem;
 }
 .input-box{
   background: white;
  //  padding: 0.2rem;
  //  width: 90%;
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
  .c-box{
    // padding-bottom: 3rem;
  }
  .agree-box{
    background: white;
    width: 90%;
    padding: 0.2rem;
    margin: 0.2rem auto;
    border-radius: 0.2rem;
  }
  .mint-cell-wrapper{
     background-image: 0;
  }
</style>