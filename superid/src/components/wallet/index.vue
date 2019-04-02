<template>
   <div class="content-box">
     <mt-header title="">
        <router-link to="/" slot="left">
           <span class="icon--11"></span>
        </router-link>
         <span class="icon-9" slot="right"></span>
      </mt-header>
    <div class="">
     
      <div class="box-c">
         
          <div class="top-box">
              <div>
                  <div class="top-text">
                      <span class="title-text">我的资产($)</span>
                      
                  </div>
                   <div class="bottom-text">16,1223</div>
              </div>
             
          </div>
          <div class="bottom-box">
            <div class="bottom-c">
                <button class="action-btn" @click="toTransfer"><span class="icon-24"></span> 转账</button>
            </div>
          <div class="bottom-c">
              <button class="action-btn" @click="toReceipt"><span class="icon-11"></span>收款</button>
          </div>
          </div>
          
      </div>
  </div>
   </div>
  
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  created(){
      
  },
  methods:{
    toTransfer(){
      this.$router.push({path:'/transfer'})
    },
    toReceipt(){
      this.$router.push({path:'/receipt'})
    }
  }
 }
</script>

<style lang="less" scoped>

 
 .top-text{
   margin-bottom:0.1rem;
 }
 .box-c{
     background: #26A2FF;
     /* border-radius: 0.1599147121535181rem; */
     color: white;
     /* width: 85%; */
     margin: 0 auto;
     padding:0.3464818763326226rem 0;
}
.top-box{
    text-align: center;
}
  .bottom-box{
      display: flex;
      /* justify-content: space-between; */
      margin-top: 1rem;
  }
  .bottom-c{
    flex: 1;
    text-align: center;
  }
   .title-text{
       font-size:0.5063965884861407rem;
       
   }
  
  .bottom-text{
    font-size: 0.3464818763326226rem;
  }
  .icon-1::before{
      color: white;
      font-size: 0.5rem;
      position: relative;
      left: 2.5rem;
  }
  .content-box{
    color: white;
  }
   .icon--11::before,.icon-9::before{
     color: white;
    
   }
   .icon--11::before{
     font-size: 0.5rem;
   }
  .icon-9::before{
    font-size: 0.8rem;
  }
  .action-btn{
    border: 0;
    background: none;
    color: white;
    border: 1px solid white;
    padding: 0.2rem 0.2rem;
    width:2.5rem;
    border-radius: 25px;
   .icon-24::before,.icon-11::before{
    color: white;
    margin-right: 0.1rem;
    font-size: 0.5rem;
    position: relative;
    top: 0.05rem;
   }
  }

</style>