<!--  -->
<template>
  <div>
     <mt-header title="累计分红">
  <router-link to='/mine'  slot="left">
    <mt-button @click="back" icon="back">返回</mt-button>
  </router-link>
   
</mt-header>
 <mt-cell title="USD" value="">{{bonus_total}}</mt-cell>
 
 <mt-cell title="BTC" value="">{{bonus_total_btc_price}}</mt-cell>
 
  </div>
</template>

<script>
import {requestGet,requestPost} from '@/api/api.js'
export default {
  data () {
    return {
      bonus_total:0,
      bonus_total_btc_price:0,
      wallet_price:''
    };
  },

  components: {},
  created(){
    this.getWalletPrice()
   
  },
  computed: {},

  methods: {
    // /api/v1/invite/get_invite_bonus_list
    getWalletPrice(){
    requestPost('/api/v1/wallet/get_wallet_price',{wallet_name: 'BTC'}).then(res=>{
      if(res.data.code==0){
          this.wallet_price=res.data.data.price
           this.getBonus()
      }
    })
    },
    getBonus(){
       requestGet('/api/v1/invite/get_invite_bonus_list').then(res=>{
        if(res.data.code==0){
         this.bonus_total=res.data.data.bonus_total
         this.bonus_total_btc_price=this.bonus_total/this.wallet_price
           
        }
       })
    },
    back(){
     this.$router.push({path:'/',query:{"selected":'mine'}})
     
   } 
  }
}

</script>
<style  scoped>
</style>