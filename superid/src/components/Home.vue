<template>
  <div class="">
  <mt-tab-container v-model="selected">
  <mt-tab-container-item id="wallet">
        <wallet></wallet>
  </mt-tab-container-item>
  <mt-tab-container-item id="moneyMange">
       <moneyMange></moneyMange>
  </mt-tab-container-item>
  <mt-tab-container-item id="find">
          <Find></Find>
  </mt-tab-container-item>
  <mt-tab-container-item id="mine">
      <mine></mine>
  </mt-tab-container-item>
</mt-tab-container>

<div class="bottom-bar">
  <mt-tabbar v-model="selected" :fixed="true">
    <mt-tab-item id="wallet">
       <span slot="icon" class="icon-5"></span>
       资产
    </mt-tab-item>
    <mt-tab-item id="moneyMange">
       <span slot="icon" class="icon-4"></span>
      理财
    </mt-tab-item>
    <mt-tab-item id="find">
       <span slot="icon" class="icon-12"></span>
      发现
    </mt-tab-item>
    <mt-tab-item id="mine">
      <span slot="icon" class="icon-19"></span>
      我的
    </mt-tab-item>
  </mt-tabbar>
</div>
  </div>
</template>

<script>
import wallet from '@/components/wallet/index.vue'
 import moneyMange from '@/components/moneyMange/index.vue'
 import mine from '@/components/mine/index.vue'
 import Find from '@/components/find/index.vue'
export default {
  name: '',
  components:{
   moneyMange,mine,wallet,Find
  },
  data() { 
    return {
      selected:""
     
    }
  },
  mounted(){
   
  },
  created () {
    
     console.log(this.$route.query)
    if(this.$route.query.status=='login' || this.$route.query.selected=='mine'){
      this.selected='mine'
      
    }else{
         this.selected='moneyMange'
        
       }
    
  }
 }
</script>

<style lang="" scoped>
 [class|=icon]::before{
     color: black;
     font-size: 0.5rem;
     position: relative;
     top: 0.1rem;
   }
   .icon-4::before{
    font-size: 0.8rem;
    right: 0.1rem;
    top: 0;
    bottom: 0.1rem;
   }
</style>