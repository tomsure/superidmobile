<template>
  <div class="">
      <div>
          <mt-header title="选择资产类型">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
   
</mt-header>
      </div>
     <assetType></assetType>
     <assetType></assetType>

     <assetType></assetType>

     <assetType></assetType>

     <assetType></assetType>

  </div>
</template>

<script>
import assetType from '@/components/wallet/receipt/assetType.vue'
export default {
  name: '',
  components:{
    assetType
  },
  data() { 
    return {

    }
  }
 }
</script>

<style lang="" scoped>
</style>