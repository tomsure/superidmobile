
<template>
  <!-- <div class="profit-box"> -->
    <!-- <div class="name-box">猎豹量化基金</div> -->
     <!-- <div class="data-box"> -->
         <!-- <div class="profit-text">
             <div class="profit-text-1">90%</div>
             <div class="profit-text-2">QQ服务</div>
         </div>
         <div class="time-data">
             <div class="time-data-1">365天</div>
             <div class="time-data-2">$100000起购，浮动收益类</div>
         </div> -->
          
     <!-- </div> -->
     
  <!-- </div> -->
    <div>
         
        <div class="product-box">
          <div>
            <span class="icon-eth-01"></span>
             {{name}}
          </div>
         
          <div>
            
           
          </div>
           
        </div>
    </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
       name:'',
       companys:''
    }
  },
  props:['goodsData'],
  created () {
    this.name=this.goodsData.name
    this.companys=this.goodsData.series
  }
 }
</script>

<style lang="" scoped>
/* .profit-box{
    margin:0.2rem 0;
    font-size:0.3464818763326226rem;
    font-weight:400;
}
.name-box{
    padding-left:0.3rem;
    padding-top: 0.3rem;
}
 .data-box{
     display: flex;
     border-bottom:1px solid #DFDFDF;
     padding: 0.3rem 5%;
     
 }
 .profit-text,.time-data{
    flex: 1;
 }
  .profit-text-1{
      color: #E8541E;
      font-size:0.5863539445628998rem;
  }
  .time-data-1{
      font-size:0.453091684434968rem;
  }
   .profit-text-2,.time-data-2{
     font-size:0.3464818763326226rem;
   }
  .profit-text-1,.profit-text-2,.time-data-1,.time-data-2{
    text-align: left;
  } */
   /* new */

  .product-box{
    display: flex;
    justify-content: space-around;
    padding: 0.3rem;
    /* background:#2b81ee; */
    margin: 0.2rem;
    border-radius: 0.2rem;
    /* color: white; */
    font-size: 0.4rem;
     /* width:50%; */


  }
  .con--2::before{
    color: white;
  }
  .icon-1:before{
    color: white
  }
</style>