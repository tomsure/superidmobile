<!--  -->
<template>
  <div>
    <mt-header title="钱包管理">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
       
      <walletItem v-for="(item,index) in walletList" :key="item.index" :walletData='item' ></walletItem>
      <div class="add-wallet-box" @click="toAddr">
           <img src="@/assets/add.png" alt="">
        </div>
    </div>
    
  </div>
</template>

<script>
import walletItem from "@/components/wallet/walletMange/walletItem.vue";
import  {requestPost,requestGet} from '@/api/api.js'
export default {
  data() {
    return {
     walletList:[]
    };
  },

  components: {
    walletItem
  },
  created () {
    this.getWallet()
  },
  computed: {},
  methods: {
     getWallet(){
      requestGet('/api/v1/user_wallet').then(res=>{
         if(res.data.code==0){
              this.walletList=res.data.data
              console.log(this.walletList)
         }
      })
     },
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