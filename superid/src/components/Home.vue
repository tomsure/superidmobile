<template>
  <div class="">
  <mt-tab-container v-model="selected">
  <mt-tab-container-item id="wallet">
        one
  </mt-tab-container-item>
  <mt-tab-container-item id="moneyMange">
       <moneyMange></moneyMange>
  </mt-tab-container-item>
  <mt-tab-container-item id="find">
    three
  </mt-tab-container-item>
  <mt-tab-container-item id="mine">
      <mine></mine>
  </mt-tab-container-item>
</mt-tab-container>

<div class="bottom-bar">
  <mt-tabbar v-model="selected">
    <mt-tab-item id="wallet">
      <img slot="icon" src="../assets/logo.png">
       钱包
    </mt-tab-item>
    <mt-tab-item id="moneyMange">
      <img slot="icon" src="../assets/logo.png">
      理财
    </mt-tab-item>
    <mt-tab-item id="find">
      <img slot="icon" src="../assets/logo.png">
      发现
    </mt-tab-item>
    <mt-tab-item id="mine">
      <img slot="icon" src="../assets/logo.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</div>
  </div>
</template>

<script>
 import moneyMange from '@/components/moneyMange/index.vue'
 import mine from '@/components/mine/index.vue'
export default {
  name: '',
  components:{
   moneyMange,mine
  },
  data() { 
    return {
     selected:'moneyMange'
    }
  }
 }
</script>

<style lang="" scoped>
</style>