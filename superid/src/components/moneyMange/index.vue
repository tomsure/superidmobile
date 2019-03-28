<template>
  <div class=""> 
      <RevenueRanking></RevenueRanking>
  </div>
</template>

<script>
import RevenueRanking from '@/components/moneyMange/revenueRanking/index.vue'
export default {
  name: '',
  components:{
  RevenueRanking
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