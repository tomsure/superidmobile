<!--  -->
<template>
  <div>
      <payway v-for='(item,index) in walletList' :key='item.index' :walletData='item' @click.native="toBack(item)"></payway>
  </div>
</template>
 
<script>
import {requestGet} from '@/api/api.js'
 import payway from '@/components/moneyMange/goodProducts/payway/payway.vue'
export default {
  data () {
    return {
      walletList:[]
    };
  },

  components: {
    payway
  },

  computed: {},
  created(){
  requestGet('/api/v1/wallet').then(res=>{
          this.walletList=res.data.data  //暂时隐藏
   })
  },
  methods: {
    toBack(item){
       this.$router.push({path:'/goodsDetails',query:{"walletName":item.name,"walletId":item.id}})
       let data={
         "walletName":item.name,
         "walletId":item.id
       }
       this.$emit('walletData',data)  
    }
  }
}

</script>
<style  scoped>
</style>