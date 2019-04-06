<template>
 <div>
  
  <nav class="accWrapper">
    <div class="accTitle" @click="toggleList">
       <div>
          <!-- <span class="data1.icon"></span> -->
          <span class="usdt-icon"><img src="@/assets/usdt.png" alt=""></span>
      <span class="coin">USDT</span>
       </div>
       <div style="display:flex;just-content:space-between;">
         <div style="text-align:center;padding:0.35rem;">
            <div class="ft-16" >0.00</div>
         <div class="ft-12">0.00</div>
         </div>
         <span class="icon--2"></span>
       </div>
       
       
    </div>
   
  </nav>
  <nav class="accWrapper">
    <div class="accTitle" @click="toggleList">
       <div>
          <span class="icon-btc-01"></span>
      <span class="coin">BTC</span>
       </div>
       <div style="display:flex;just-content:space-between;">
         <div style="text-align:center;padding:0.35rem;">
            <div class="ft-16" >0.00</div>
         <div class="ft-12">0.00</div>
         </div>
         <span class="icon--2"></span>
       </div>
       
       
    </div>
   
  </nav>
  <nav class="accWrapper">
    <div class="accTitle" @click="toggleList">
       <div>
          <span class="icon-eth-01"></span>
      <span class="coin">ETH</span>
       </div>
       <div style="display:flex;just-content:space-between;">
         <div style="text-align:center;padding:0.35rem;">
            <div class="ft-16" >0.00</div>
         <div class="ft-12">0.00</div>
         </div>
         <span class="icon--2"></span>
       </div>
       
       
    </div>
   
  </nav>
 </div>
   
</template>
 
<script>
export default {
  data() {
    return {
      isDisplay: false,
      dat1a:{
        name:'',
        id:'',
        icon:''
      }
    };
  },
  props: ["data"],
  created(){
   this.data1=this.data
  },
  methods: {
    toggleList() {
      this.isDisplay = !this.isDisplay;
    }
  }
};
</script>
 
<style lang="less" scoped>
.accWrapper {
  display: flex;
  flex-direction: column;
  background: white;
  // border-radius: 10px;
    width: 90%;
    margin: 0.2rem auto;
    padding: 0.2rem;
    border-bottom: 1px solid #EAEAEA;
    
}
.accTitle {
  display: flex;
  justify-content: space-between;
  
  font-size: 16px;
  background: white;
  text-indent: 1em;
  cursor: pointer;
  
}
.accChevron {
  width: 20px;
  margin-right: 15px;
}
.accList {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-out;
}
.accList.maxHeight {
  max-height: 500px;
  transition: max-height 0.5s ease-in;
}
.accListItem {
  
  
  display: flex;
  justify-content: space-between;
 
  font-size: 16px;
  text-indent: 1em;
  cursor: pointer;
  border-top: 1px solid #ECE9E9;
  padding: 0.2rem;
}

@keyframes open-menu {
  to {
    transform: rotate(90deg);
  }
}
@keyframes close-menu {
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.open_menu {
  animation: open-menu 0.4s ease-out forwards;
}
.close_menu {
  animation: close-menu 0.4s ease-out forwards;
}
.icon--2::before{
  position: relative;
  top: 0.5rem;
}

.coin-icon{
 font-size: 1.2rem;
}
.coin{
  position: relative;
  bottom: 0.5rem;
}
.icon-usdt::before{
  color:#2b81ee;
     font-size: 1rem;
     margin-right: 0.2rem;
    position: relative;
    top: 0.2rem;
}
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
    .icon-btc-01{
      font-size: 1rem;
    }
     .icon-eth-01::before{
      font-size: 1rem;
     }
     .coin{
       position: relative;
       top: 0;

     }
</style>