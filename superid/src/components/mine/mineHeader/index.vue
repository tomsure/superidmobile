<!--  -->
<template>
  <div  class="content">
    
     <div style="display:flex;text-align:center;">
      <div  class="topc top-left">
          <div class=""> 
            <div class="logo">
           <img src="../../../assets/logo.png"   alt="">
         </div>
        <div style="margin-top:0.2rem;">{{userName}}</div>
          </div>
      </div>
      <div  class="topc top-right">
        <div style="display:flex;">
          <div style="flex:1;">
          <div class="total-data">{{totalAsset}}</div>
          <div  class="assets-text">总资产($)</div>
        </div>
         <span style="flex:1;margin-left:auto;position:fixed;left:9.3rem;top:40px;font-size:0.4264392324093817rem;" class="icon--2" @click="toAsset"></span>
        </div>
        </div>

    </div>
      
   
    <div class="header-bottom" style="">
      <div style="flex:1;text-align:center;border-right:1px solid #324C7B;">
        <div class="noPadding assets-text">
          可用余额($)
        </div>
        <div class="noPadding assets-data">
           {{balance}}
        </div>
      </div>
      <div style="flex:1;text-align:center;">
        <div class="noPadding assets-text">
         昨日收益($)
        </div>
        <div class="noPadding assets-data">
            +{{yesterdayProfit}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import  {requestPost,requestGet} from '@/api/api.js'
export default {
  data () {
    return {

       logUrl:'', //头像
      userName:'', //用户名
      totalAsset:'',//总资产
      balance:'', //可用余额
      yesterdayProfit:'' //昨日收益

    };
  },
  props:[],
  created(){
   this.getAssets()
  },
  mounted () {
      if(localStorage.getItem('user_info')){
       this.userName=JSON.parse(localStorage.getItem('user_info')).username
     this.asstes=JSON.parse(localStorage.getItem('user_info')).asstes
      }
     
  },
  components: {},

  computed: {},

  methods: {
    toAsset(){
      
      this.$router.push({name: 'Asset'})
    },
    getAssets(){
         
        // alert(localStorage.getItem('token'))
      requestGet('api/v1/asset',).then(res=>{
         if(res.data.status='success'){
            // this.totalAsset=res.data.data.total_asset
          //  this.balance=res.data.data.balance
            
          //  this.yesterdayProfit=res.data.data.yesterday_profit

         }
        
      })
    }

  }
}

</script>
<style  scoped>
  .topc{
    flex:1;
    text-align:center;
    /* border: 1px solid red; */
     padding: 25px;
     display: flex;
			 align-items: center;
  }

  .top-right,.top-left{
     display: flex;
     justify-content: center;

  }
  
  .logo{
    border-radius: 50px;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    /* border: 1px solid red; */
    overflow: hidden;
  }
   .logo img{
     width: 100%;
     height: 100%;
     
   }
  .content{
    font-size: 0.5rem;


  }
  .header-bottom{
    display:flex;
    text-align:center;
    border-top:1px solid #324C7B;
   
    
  }
   .header-bottom div{
      /* padding:0.5rem auto;
        */
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
  *{
    background-color:#1E3C72;
    color:white;
  }
  .noPadding{
    padding: 0!important;
  }
  .icon--2::before{
    color: white;
  }
  
   .assets-data{
     
      font-size:0.373134328358209rem;
   }
   .assets-text{
     font-size: 0.3198294243070362rem;
     margin-bottom: 0.2rem;
   }
   .total-data{
     font-size: 0.5863539445628998rem;
   }
</style>