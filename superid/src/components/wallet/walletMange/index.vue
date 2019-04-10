<!--  -->
<template>
  <div>
    <mt-header title="钱包管理">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
        <div class="add-wallet-box" @click="toAddr">
           <img src="@/assets/add.png" alt="">
        </div>
      <walletItem></walletItem>
      <walletItem></walletItem>
      <walletItem></walletItem>
    </div>
    
  </div>
</template>

<script>
import walletItem from "@/components/wallet/walletMange/walletItem.vue";
import  {requestPost,requestGet} from '@/api/api.js'
export default {
  data() {
    return {
    
    };
  },

  components: {
    walletItem
  },

  computed: {},
  methods: {
     toAddr(){
       this.$router.push({path:'/addWalletAddr'})
     }
  }
};
</script>
<style lang='less' scoped>
 .add-wallet-box{
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  margin: 1rem auto;
  img{
    width: 100%;
    height: 100%;
  }
 }
  
  
  
   
</style>