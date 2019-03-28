<template>
  <div class="">
  <mt-tab-container v-model="selected">
  <mt-tab-container-item id="one">
        one
  </mt-tab-container-item>
  <mt-tab-container-item id="two">
       <moneyMange></moneyMange>
  </mt-tab-container-item>
  <mt-tab-container-item id="three">
    three
  </mt-tab-container-item>
  <mt-tab-container-item id="four">
    four
  </mt-tab-container-item>
</mt-tab-container>

<div class="bottom-bar">
  <mt-tabbar v-model="selected">
    <mt-tab-item id="one">
      <img slot="icon" src="../assets/logo.png">
       钱包
    </mt-tab-item>
    <mt-tab-item id="two">
      <img slot="icon" src="../assets/logo.png">
      理财
    </mt-tab-item>
    <mt-tab-item id="three">
      <img slot="icon" src="../assets/logo.png">
      发现
    </mt-tab-item>
    <mt-tab-item id="four">
      <img slot="icon" src="../assets/logo.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</div>
  </div>
</template>

<script>
 import moneyMange from '@/components/moneyMange/index.vue'
export default {
  name: '',
  components:{
   moneyMange
  },
  data() { 
    return {
     selected:''
    }
  }
 }
</script>

<style lang="" scoped>
</style>