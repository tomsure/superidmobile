<!--  -->
<template>
  <div>
     <mt-header title="钱包管理">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
 
</mt-header>
    <div>
       <!-- <div class="wallet-box">
            <mt-cell title="ETH-wallet"  :is-link='true' value="">
              
                
               <mt-button  slot="right"></mt-button>
              </mt-cell> 

              <div class="addr">
                    oijrfowjogrfjowjegvojqpopqoefqworvowerfkore
              </div>
              <div class="list-box-b">  
               <div class="ft-18">
                 16648 <span>ETH</span>
               </div>
               <div>
                   <span class="icon-ETH"></span>
               </div>
              </div>
       </div> --> 
       <walletItem></walletItem>
       <walletItem></walletItem>
       <walletItem></walletItem>

    </div>
  </div>
</template>

<script>
 import walletItem from '@/components/wallet/walletMange/walletItem.vue'
export default {
  data () {
    return {
    };
  },

  components: {
   walletItem
  },

  computed: {},

  methods: {}
}

</script>
<style  scoped>

</style>