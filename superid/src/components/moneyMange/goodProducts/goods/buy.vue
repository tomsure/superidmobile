<!--  -->
<template>
  <div>
      <mt-header :title="name">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
  
</mt-header>
      <div class="flex-box header-box">
         <div class="product-logo">
           <img src="@/assets/1.png" alt="">
         </div>
         <div class="r-box">
           <div class="flex-box">
             <div>{{name}}</div>
             <div>{{limit_money}}</div>
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
      <!-- // -->
       <!-- // -->
         <div class="input-box">
       <h4 class="title-t">投资金额</h4>
        <mt-field label="$" placeholder="请输入投资金额" v-model="limit_money" ></mt-field>
         <span>* 该产品最低起投</span>
         </div>
       <!-- // -->

       <div class="submit-box-common">
            <button class="submit-btn-common" @click="tobuy()">
              立即开启
            </button>

       </div>
  </div>
</template>

<script>
import {requestPost,requestGet} from '@/api/api'
export default {
  data () {
    return {
      id:'',
      name:'',
      companys:'',
      type:'',
      kind:'',
      companys:'',
      limit_money:'',
      


    };
  },

  components: {},

  computed: {},
  created () {
     this.getGoodsInfo()
     this.name=this.$route.query.name
     
    //  console.log(this.$route.query)
  },
  methods: {
     getGoodsInfo(){
        requestGet('/api/v1/goods/'+ this.$route.query.id,).then(res=>{
           this.limit_money=res.data.data[0].limit_money
           this.name=res.data.data[0].name
           this.type=res.data.data[0].type_name
           this.kind=res.data.data[0].name
           this.companys=res.data.data[0].companys
           this.id=res.data.data[0].id
           this.orderData=res.data.data[0]
        })
     },
     tobuy(){
      // requestGet('api/v1/user/'+ this.$route.query.uid).then(res=>{
        this.$router.push(
          {
            path:'/goodsDetails',
            query:{
              "uid":this.$route.query.uid,
              'limit_money':this.limit_money,
               "goodsId":this.id,
                "name":this.name,
                "companys":this.companys,
                "type":this.type,
                "kind":this.kind,
                
               
            }
            }
            )
      // })
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
</style>