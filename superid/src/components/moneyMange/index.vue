<template>
  <div class=""> 
      <swipe></swipe>
      <grid></grid>  
      <goodsItemBox></goodsItemBox>
       <!-- <recommend></recommend> -->
      <!-- <RevenueRanking></RevenueRanking> -->
  </div>
</template>

<script>
import swipe from "@/components/moneyMange/swipe/index.vue"
import grid from "@/components/moneyMange/grid/index.vue"
// import goodProducts from "@/components/moneyMange/goodProducts/index.vue"
import goodsItemBox from '@/components/moneyMange/goodProducts/goodsItemBox.vue'

import recommend from "@/components/moneyMange/recommend/index.vue"

import RevenueRanking from '@/components/moneyMange/revenueRanking/index.vue'
export default {
  name: '',
  components:{swipe,grid,recommend,goodsItemBox, RevenueRanking},
  data() { 
    return {
     selected:''
    }
  }
 }
</script>

<style lang="" scoped>
</style>