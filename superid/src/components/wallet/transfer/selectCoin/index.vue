<template>
  <div class="">
       <mt-header title="代币选择">
  <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
    <CoinItem></CoinItem>
     <CoinItem></CoinItem>
      <CoinItem></CoinItem>
       <CoinItem></CoinItem>
  </div>
</template>

<script>
import CoinItem from '@/components/wallet/transfer/selectCoin/CoinItem.vue'
export default {
  name: '',
  components:{
      CoinItem
      },
  data() { 
    return {

    }
  }
 
 }
</script>

<style lang="" scoped>
</style>