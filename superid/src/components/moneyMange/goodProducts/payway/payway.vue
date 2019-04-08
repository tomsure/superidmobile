<!--  -->
<template>
  <div class="content-box">
     <div class="header">
          
         <div class="coin-text">
          <div>
              <!-- <span class="usdt-icon"><img src="@/assets/usdt.png" alt=""></span> -->
               <span :class="icon"></span> <!--勿删 -->

          </div>
          <div>
              <span class="coin-name">{{coinName}}</span>
          </div>
         </div>
          <div class="rowt" >
               <div>1</div>
               <div>≈ $<span>0.99</span></div>
          </div>
     </div>
     
      
  </div>
</template>

<script>
import {requestGet} from '@/api/api.js'
export default {
  data () {
    return {
         coinName:'',
         icon:''
    };
  },
  props:['walletData'],
  components: {},
  computed: {},
  created(){
    this.coinName=this.walletData.name
    this.icon=this.walletData.icon
   
  },
  methods: {
    toReceipt(){
      // this.$router.push({path:'/'})
      // alert(123)
    }
  }
}

</script>
<style lang='less'  scoped>
button:focus{
  outline: none;
}
button{
  background: #FFFFFFFF;
  color:#3F82DD ;
  border: 0;
   margin: 0.1rem;
   width:2rem;
   border:1px solid #3F82DD;
   border-radius:20px;
}
 html{
    background: #F8F8FF;
    
   /* background: red; */

 }
  .coin-text{
      display: flex;
   
  }
 .rowt{
   color:#616860 ;
 }
 
  .header{
    display: flex;
    justify-content: space-between;
  }
   .header{
     text-align: center;
   }
   .content-box{
    
/* position: relative; */

width:8.75rem;
/* height:3.15625rem; */
line-height: 0.625rem;;
border-radius: 0.1875rem;;
background-color: rgba(255, 255, 255, 1);
color: rgba(16, 16, 16, 1);
font-size: 0.4375rem;
text-align: center;
/* box-shadow: 0px 0px 0.6875rem 0px rgba(210, 210, 210, 1); */
font-family: Arial;
margin: 0.25rem auto;
color: #333333 100%;
padding: 0.46875rem;
  
   }
  
 .coin-name{
     display: inline-block;
     /* width: 1.5rem; */
     /* height: 1.5rem; */
     margin-top: 0.4rem;
 }
//  .usdt-icon{
//    width: 0.5rem;
//    height: 0.5rem;
//    img{
//      width:100%;
//      height:100%;
     
//    }
//  }
    .usdt-icon img{
      display: inline-block;
    width: 1rem;
    height: 1rem;
    position: relative;
    top: 0.2rem;
    margin-right: 0.1rem;
    }
    .icon-usdt::before{
     color:#2b81ee;
     font-size: 1rem;
     margin-right: 0.2rem;
    position: relative;
    top: 0.2rem;
    }
     .icon-btc-01:before,.icon-eth-01::before{
       font-size: 1rem;
       position: relative;
       top: 0.2rem;
       margin-right: 0.1rem;
     }
</style>